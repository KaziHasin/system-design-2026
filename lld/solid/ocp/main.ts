import CardPayment from "./cardPayment";
import PaymentProcessor from "./PaymentProcessor";
import PaypalPayment from "./paypalPayment";


const cardPayment = new CardPayment();
const paypalPayment = new PaypalPayment();

const paymentProcessorC = new PaymentProcessor(cardPayment);
const paymentProcessorP = new PaymentProcessor(paypalPayment);

paymentProcessorC.processPayment(100);
paymentProcessorP.processPayment(200);
