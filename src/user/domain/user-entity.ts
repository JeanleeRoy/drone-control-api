import { Auth } from "~/shared/domain/auth-entity";

export interface User extends Auth {
  uuid: string;
  name: string;
  role: string;
  description: string;
}
