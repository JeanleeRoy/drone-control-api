export interface TokenProvider {
  signToken<T>(payload: T): Promise<string>;
  verifyToken<T>(token: string): Promise<T | null>;
}
