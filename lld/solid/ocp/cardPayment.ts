import { IPaymentProcessor } from "./PaymentProcessor";

class CardPayment implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing card payment of amount: $${amount}`);
    }
}

export default CardPayment;