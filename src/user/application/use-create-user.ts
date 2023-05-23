import { User } from "../domain/user-entity";
import { UserRepository } from "../domain/user-repository";

export interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

const useCreateUser =
  (userRepository: UserRepository) =>
  async ({ name, email, password }: CreateUserProps): Promise<User> => {
    console.log("[UserUseCases] createUser");
    const user: User = {
      name,
      email,
      password,
      role: "user",
      description: "",
      uuid: "c0ce5ac4-ed4c-11ed-a05b-0242ac120003",
    };
    const newUser = await userRepository.createUser(user);
    console.log("[UserUseCases] createUser end", newUser);
    return newUser;
  };

export { useCreateUser };
