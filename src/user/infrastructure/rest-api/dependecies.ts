import { UserUseCases } from "~/user/application";
import { MockUserRepository } from "../repository/mock-user-repository";
import { BcryptHash } from "~/shared/infrastructure/provider/bcrypt-hash";
import { JwtProvider } from "~/shared/infrastructure/provider/token-jwt";

// Repositories

export const userRepository = new MockUserRepository();

// Providers

const hashProvider = new BcryptHash();
const jwtProvider = new JwtProvider();

// Use cases

export const userUseCases = new UserUseCases(
  userRepository,
  hashProvider,
  jwtProvider
);
