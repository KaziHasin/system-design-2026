import { UsersController } from "./UsersController";
import { UsersRepository } from "./UsersRepository";
import { UsersService } from "./UsersService";


const usersRepository = new UsersRepository();
const usersService = new UsersService(usersRepository);
const admin = new UsersController(usersService);

admin.store();