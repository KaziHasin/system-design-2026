import { PaymentResult } from "./type/PaymentResult";

export interface PaymentGateWay {
    initiatePayment(amount: number, currency: string): Promise<PaymentResult>;
}