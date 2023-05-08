import { UserUseCases } from "../../application";
import { MockUserRepository } from "../repository/mock-user-repository";
import { UserController } from "./user-controller";

// Repositories

const userRepository = new MockUserRepository();

// Use cases

const userUseCases = new UserUseCases(userRepository);


export const userController = new UserController(userUseCases);
