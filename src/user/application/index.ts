import { CryptoProvider } from "~/shared/domain/crypto-provider";
import { UserRepository } from "../domain/user-repository";
import { useCreateUser } from "./use-create-user";
import { useGetUserById } from "./use-get-user";
import { useListUsers } from "./use-list-users";
import { useLoginUser } from "./use-login-user";
import { JwtProvider } from "~/shared/infrastructure/provider/token-jwt";

export class UserUseCases {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashProvider: CryptoProvider,
    private readonly tokenProvider: JwtProvider
  ) {}
  createUser = useCreateUser(this.userRepository, this.hashProvider);
  loginUser = useLoginUser(
    this.userRepository,
    this.hashProvider,
    this.tokenProvider
  );
  getUserById = useGetUserById(this.userRepository);
  listUsers = useListUsers(this.userRepository);
}
