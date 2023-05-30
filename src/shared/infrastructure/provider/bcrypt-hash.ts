import { CryptoProvider } from "~/shared/domain/crypto-provider";
import bcrypt from "bcryptjs";

export class BcryptHash implements CryptoProvider {
  async encode(data: string) {
    return bcrypt.hash(data, 10);
  }
  async compare(data: string, encrypted: string) {
    return bcrypt.compare(data, encrypted);
  }
}

export default new BcryptHash();
