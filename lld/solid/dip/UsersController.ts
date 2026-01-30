import { IUsersService } from "./dependency/Services";

class UsersController {
    constructor(private usersService: IUsersService) { }

    store() {
        this.usersService.store();
    }
}

export { UsersController };