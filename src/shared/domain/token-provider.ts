export interface TokenProvider {
  signToken(payload: any): Promise<string>;
  verifyToken<T>(token: string): Promise<T | null>;
}
