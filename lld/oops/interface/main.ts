import { CreditCardPayment } from "./gateway/CreditCardPayment";
import { PaymentService } from "./PaymentService";
const paymentGateway = new CreditCardPayment();

const paymentService = new PaymentService(paymentGateway);
paymentService.makePayment(100, "USD");