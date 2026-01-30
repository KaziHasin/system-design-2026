import BaseUser from "./baseUser";
import Customer from "./customer";

function printRole(user: BaseUser) {
    console.log(`User Role: ${user.getUserRole()}`);
}

printRole(new Customer());