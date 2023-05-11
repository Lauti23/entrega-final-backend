import { cartService, productService } from "../services/services.config.js"

const render = async (req, res) => {
    const carts = await cartService.get({ owner: req.user.username })
    const cart = carts[0]
    const { owner, price, items, created_at } = cart
    const result = { owner, price, items, created_at }
    res.render("cart.hbs", { result })
}

const addProductToCart = async (req, res) => {
    let { id } = req.params
    const product = await productService.getById({ _id: id })
    const carts = await cartService.get({ owner: req.user.username })
    const cart = carts[0]
    const cartItems = cart.items
    cartItems.push(product)
    const cartPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0)
    await cartService.update({ owner: req.user.username }, {items: cartItems, price: cartPrice}) 
    res.status(200).redirect("/carts")
}

const deleteProductFromCart = async (req, res) => {
    res.redirect("/carts")
}

export default {
    render,
    addProductToCart,
    deleteProductFromCart
}