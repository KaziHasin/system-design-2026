import { IUsersRepository } from "./dependency/Repositories";

class UsersRepository implements IUsersRepository {
    store() {
        console.log("Save data into database");
    }
}


export { UsersRepository };