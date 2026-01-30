import { Product } from "./order";
import PriceCalculation from "./PriceCalculation";

class Invoice {
    private products: Product[];
    private priceCalculation: PriceCalculation;

    constructor(products: Product[]) {
        this.products = products;
        this.priceCalculation = new PriceCalculation(products);

    }
    generateInvoice(): string {
        let invoice = 'Invoice:\n';
        this.products.forEach(product => {
            invoice += `Product ID: ${product.id}, Name: ${product.name}, Price: $${product.price}\n`;
        });
        invoice += `Total: $${this.priceCalculation.calculateTotal()}\n`;
        return invoice;
    }
}

export default Invoice;