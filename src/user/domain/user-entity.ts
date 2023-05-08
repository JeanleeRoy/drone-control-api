import { Auth } from "./auth-entity";

export interface User extends Auth {
  uuid: string;
  name: string;
  description: string;
}
