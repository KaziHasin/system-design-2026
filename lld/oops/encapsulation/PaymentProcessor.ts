
class PaymentProcessor {
    private cardNumber: string;
    private amount: number;

    constructor(cardNumber: string, amount: number) {
        this.cardNumber = this.maskCardNumber(cardNumber);
        this.amount = amount;
    }

    private maskCardNumber(cardNumber: string): string {
        return "**** **** **** " + cardNumber.slice(-4);
    }

    public processPayment(): void {
        console.log(
            `Processing payment of ${this.amount} with card number ${this.cardNumber}`
        );
    }
}

export default PaymentProcessor



