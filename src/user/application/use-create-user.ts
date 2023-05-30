import { User } from "../domain/user-entity";
import { UserRepository } from "../domain/user-repository";
import { CryptoProvider } from "~/shared/domain/crypto-provider";
import { v4 as uuid } from "uuid";

export interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

const useCreateUser =
  (userRepository: UserRepository, hashProvider: CryptoProvider) =>
  async ({ name, email, password }: CreateUserProps): Promise<User> => {
    console.log("[UserUseCases] createUser");
    const hashPassword = await hashProvider.encode(password);
    const user: User = {
      name,
      email,
      password: hashPassword,
      role: "user",
      description: "",
      uuid: uuid(),
    };
    const newUser = await userRepository.createUser(user);
    console.log("[UserUseCases] createUser end", {
      name: newUser.name,
      email: newUser.email,
      uuid: newUser.uuid,
    });
    return newUser;
  };

export { useCreateUser };
