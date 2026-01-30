import { PaymentGateWay } from "../PaymentGateWay";
import { PaymentResult } from "../type/PaymentResult";

export class UPIPayment implements PaymentGateWay {
    async initiatePayment(amount: number, currency: string): Promise<PaymentResult> {
        console.log(`UPI payment of ${amount} ${currency}`);
        return {
            success: true,
            transactionId: "UPI1122334455"
        }
    }
}