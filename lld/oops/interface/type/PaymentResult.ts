export interface PaymentResult {
    success: boolean;
    transactionId: string;
    message?: string;
}