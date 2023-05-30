import { TokenProvider } from "~/shared/domain/token-provider";
import jwt from "jsonwebtoken";

export class JwtProvider implements TokenProvider {
  async signToken(payload: any, expiresIn = "2h"): Promise<string> {
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
}

export default new JwtProvider();
