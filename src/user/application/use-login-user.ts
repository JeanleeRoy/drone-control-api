import { CryptoProvider } from "~/shared/domain/crypto-provider";
import { UserRepository } from "../domain/user-repository";

const useLoginUser =
  (userRepository: UserRepository, hashProvider: CryptoProvider) =>
  async (email: string, password: string) => {
    console.log("[UserUseCases] useAuthUser");
    const user = await userRepository.getUserByEmail(email);

    const isPasswordValid = await hashProvider.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordValid) {
      console.log("[UserUseCases] Invalid username or password");
      return null;
    }

    console.log("[UserUseCases] useAuthUser end", {
      name: user.name,
      email: user.email,
      uuid: user.uuid,
    });
    return user;
  };

export { useLoginUser };
