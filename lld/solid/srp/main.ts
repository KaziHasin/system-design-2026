
import Invoice from './invoice';
import Order from './order';
import PriceCalculation from './PriceCalculation';

const order = new Order();

// Adding products
order.addProduct({ id: 1, name: 'Laptop', price: 999.99 });
order.addProduct({ id: 2, name: 'Mouse', price: 25.50 });
order.addProduct({ id: 3, name: 'Keyboard', price: 45.00 });
console.log('Products after addition:', order.getProducts());

// Updating a product
order.updateProduct(2, 'Wireless Mouse', 30.00);
console.log('Products after update:', order.getProducts());
// Removing a product
order.removeProduct(3);
console.log('Products after removal:', order.getProducts());

// Calculating total
const priceCalculation = new PriceCalculation(order.getProducts());
const total = priceCalculation.calculateTotal();
console.log('Total price:', total);

// Generating invoice
const invoice = new Invoice(order.getProducts()).generateInvoice();
console.log(invoice);
