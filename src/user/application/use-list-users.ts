import { UserRepository } from "../domain/user-repository";

export const useListUsers = (userRepository: UserRepository) => async () => {
  console.log("[UserUseCases] listUsers");
  const users = await userRepository.listUsers();
  console.log("[UserUseCases] listUsers end", users);
  return users;
};
