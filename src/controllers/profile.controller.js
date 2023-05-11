import { productService } from "../services/services.config.js"

export const render = async (req, res) => {
    const { name, surname, email, phone, username, image } = req.user
    const user = {
        name,
        surname,
        email,
        phone,
        username,
        image
    }
    const products = await productService.get({ seller: user.username })
    console.log("MIS PRODS: ", products)
    res.render("profile.hbs", { 
        currentUser: user, 
        productsOnSale: products
    })
}
