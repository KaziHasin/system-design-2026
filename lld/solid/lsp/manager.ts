import BaseUser from "./baseUser";

class Manager extends BaseUser {
    getUserRole(): string {
        return "Manager";
    }
}

export default Manager;