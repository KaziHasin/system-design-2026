import { PaymentGateWay } from "../PaymentGateWay";
import { PaymentResult } from "../type/PaymentResult";

export class PaypalPayment implements PaymentGateWay {
    async initiatePayment(amount: number, currency: string): Promise<PaymentResult> {
        console.log(`Processing PayPal payment of ${amount} ${currency}`);
        return {
            success: true,
            transactionId: "PP987654321"
        }
    }
}