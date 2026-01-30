import BaseUser from "./baseUser";

class Customer extends BaseUser {
    getUserRole(): string {
        return "Customer";
    }
}

export default Customer;