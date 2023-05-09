import { UserUseCases } from "../../application";
import { MockUserRepository } from "../repository/mock-user-repository";

// Repositories

export const userRepository = new MockUserRepository();

// Use cases

export const userUseCases = new UserUseCases(userRepository);
