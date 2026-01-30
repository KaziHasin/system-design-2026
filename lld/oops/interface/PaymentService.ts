import { PaymentGateWay } from "./PaymentGateWay";

export class PaymentService {
    constructor(private paymentGateway: PaymentGateWay) { }

    async makePayment(amount: number, currency: string) {
        const result = await this.paymentGateway.initiatePayment(amount, currency);

        if (!result.success) {
            throw new Error("Payment failed");
        }

        console.log(`Payment successful ${result.transactionId}`);

    }
} 