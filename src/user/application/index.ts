import { UserRepository } from "../domain/user-repository";
import { useCreateUser } from "./use-create-user";
import { useGetUserById } from "./use-get-user";
import { useListUsers } from "./use-list-users";

export class UserUseCases {
  constructor(private readonly userRepository: UserRepository) {}
  createUser = useCreateUser(this.userRepository);
  getUserById = useGetUserById(this.userRepository);
  listUsers = useListUsers(this.userRepository);
}
