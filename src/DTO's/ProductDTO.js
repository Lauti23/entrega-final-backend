export default class ProductDTO {
    constructor(product) {
        this.name = product.name
        this.price = product.price
        this.stock = product.stock
        this.date = product.date
    }
}