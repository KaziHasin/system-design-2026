import { Product } from "./order";

class PriceCalculation {

    private products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    calculateTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }


}

export default PriceCalculation;