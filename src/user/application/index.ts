import { UserRepository } from "../domain/user-repository";
import { useCreateUser } from "./use-create-user";
import { useListUsers } from "./use-list-users";

export class UserUseCases {
  constructor(private readonly userRepository: UserRepository) {}
  createUser = useCreateUser(this.userRepository);
  listUsers = useListUsers(this.userRepository);
}
