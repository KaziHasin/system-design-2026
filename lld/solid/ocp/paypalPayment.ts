import { IPaymentProcessor } from "./PaymentProcessor";

class PaypalPayment implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing paypal payment of amount: $${amount}`);
    }
}

export default PaypalPayment;