import { CryptoProvider } from "~/shared/domain/crypto-provider";
import { UserRepository } from "../domain/user-repository";
import { TokenProvider } from "~/shared/domain/token-provider";
import { AuthPayload } from "~/shared/domain/auth-entity";

const useLoginUser =
  (
    userRepository: UserRepository,
    hashProvider: CryptoProvider,
    tokenProvider: TokenProvider
  ) =>
  async (email: string, password: string) => {
    console.log("[UserUseCases] useLoginUser");
    const user = await userRepository.getUserByEmail(email);

    const isPasswordValid = await hashProvider.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordValid) {
      console.log("[UserUseCases] Invalid username or password");
      return null;
    }

    const token = await tokenProvider.signToken<AuthPayload>({
      userId: user.uuid,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    console.log("[UserUseCases] useLoginUser end", {
      name: user.name,
      email: user.email,
      token,
    });

    return { token };
  };

export { useLoginUser };
