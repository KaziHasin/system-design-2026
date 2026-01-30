
export class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export default class Order {

    products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(productId: number): Product | undefined {
        return this.products.find(p => p.id === productId);
    }

    updateProduct(productId: number, name: string, price: number): void {
        const product = this.getProduct(productId);
        if (product) {
            product.name = name;
            product.price = price;
        }
    }

    removeProduct(productId: number): void {
        this.products = this.products.filter(p => p.id !== productId);
    }



}