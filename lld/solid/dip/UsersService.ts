import { IUsersRepository } from "./dependency/Repositories";
import { IUsersService } from "./dependency/Services";

class UsersService implements IUsersService {
    constructor(private usersRepository: IUsersRepository) { }

    store() {
        this.usersRepository.store();
    }
}

export { UsersService };