
export interface IPaymentProcessor {
    processPayment(amount: number): void;
}

class PaymentProcessor {

    process: IPaymentProcessor;

    constructor(paymentProcessor: IPaymentProcessor) {
        this.process = paymentProcessor;
    }

    processPayment(amount: number): void {
        this.process.processPayment(amount);
    }
}

export default PaymentProcessor;