import { TokenProvider } from "~/shared/domain/token-provider";
import { TOKEN_EXPIRATION_TIME } from "../constants";
import jwt from "jsonwebtoken";

export class JwtProvider implements TokenProvider {
  async signToken(
    payload: any,
    expiresIn = TOKEN_EXPIRATION_TIME.TEXT
  ): Promise<string> {
    return jwt.sign(payload, `${process.env.JWT_SECRET}`, {
      expiresIn,
    });
  }
  async verifyToken<T>(token: string): Promise<T | null> {
    try {
      return jwt.verify(token, `${process.env.JWT_SECRET}`) as T;
    } catch (e) {
      return null;
    }
  }

  // Not used
  async isExpired(token: string): Promise<boolean | null> {
    try {
      const { exp } = (await this.verifyToken(token)) as {
        exp: number;
      };
      const timeInSecs = exp * 1000 - Date.now();
      return timeInSecs < 0;
    } catch {
      return null;
    }
  }
}

export default new JwtProvider();
