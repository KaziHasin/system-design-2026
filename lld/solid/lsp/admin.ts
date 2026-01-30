import BaseUser from "./baseUser";

class Admin extends BaseUser {
    getUserRole(): string {
        return "Admin";
    }
}

export default Admin;