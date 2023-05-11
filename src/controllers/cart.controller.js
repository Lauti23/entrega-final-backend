import { cartService } from "../services/services.config.js"

const render = async (req, res) => {
    const carts = await cartService.get({ owner: req.user.username })
    const cart = carts[0]
    const { owner, price, items, created_at } = cart
    const result = { owner, price, items, created_at }
    res.render("cart.hbs", { result })
}

const addProductToCart = async (req, res) => {

}

export default {
    render
}