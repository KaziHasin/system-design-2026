import { PaymentGateWay } from "../PaymentGateWay";
import { PaymentResult } from "../type/PaymentResult";

export class CreditCardPayment implements PaymentGateWay {
    async initiatePayment(amount: number, currency: string): Promise<PaymentResult> {
        console.log(`Processing credit card payment of ${amount} ${currency}`);

        return {
            success: true,
            transactionId: "CC123456789"
        }
    }
}