import { User } from "../domain/user-entity";
import { UserRepository } from "../domain/user-repository";

export const useGetUserById =
  (userRepository: UserRepository) =>
  async (uuid: string): Promise<User | null> => {
    console.log("[UserUseCases] getUser");
    const user = await userRepository.getUserById(uuid);
    console.log("[UserUseCases] getUser end");
    return user;
  };
