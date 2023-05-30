export interface CryptoProvider {
  encode(data: string): Promise<string>;
  compare(data: string, encrypted: string): Promise<boolean>;
}
