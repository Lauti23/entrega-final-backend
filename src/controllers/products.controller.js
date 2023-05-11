import { productService } from "../services/services.config.js"

const render = async (req, res) => {
    const products = await productService.get()
    res.status(200).render("products.hbs", { products })
}

const renderSell = (req, res) => {
    res.status(200).render("sell.hbs")
}

const renderUpdate = async (req, res) => {
    let { id } = req.params
    const product = await productService.getById({ _id: id })
    const { name, price, image, description, stock, seller, created_at } = product
    const result = { name, price, image, description, stock, seller, created_at }
    res.status(200).render("update.hbs", { result })
}

const getById = async (req, res) => {
    let { id } = req.params
    const product = await productService.getById({ _id: id })
    const { _id, name, price, image, description, stock, seller, created_at } = product
    const result = { _id, name, price, image, description, stock, seller, created_at }
    res.status(200).render("product.hbs", { result })
}

const updateById = async (req, res) => {
    let { id } = req.params
    let { body } = req
    await productService.update({ _id: id }, { name: body.updateName, price: body.updatePrice, description: body.updateDescription, stock: body.updateStock})
    let product = await productService.get({ _id: id })
    res.status(200).send(product)
}

const deleteById = async (req, res) => {
    let { id } = req.params
    let deleted = await productService.delete({ _id: id })
    res.status(200).redirect("/profile")
}

const postProduct = async (req, res) => {
    const { username } = req.user
    const seller = username
    const product = {
        name: req.body.product,
        price: req.body.price,
        image: req.body.image,
        stock: req.body.stock,
        description: req.body.description,
        seller: seller
    }
    const productSaved = await productService.save(product)
    res.status(201).redirect("/products")
}

export default {
    render,
    renderSell,
    postProduct,
    getById,
    updateById,
    deleteById,
    renderUpdate
}