import { User } from "./user-entity";

export interface UserRepository {
  createUser: (user: User) => Promise<User>;
  getUserById: (uuid: string) => Promise<User | null>;
  updateUser: (uuid: string, user: User) => Promise<User>;
  deleteUser: (uuid: string) => Promise<User>;
  listUsers: () => Promise<User[]>;
  // getUserByEmail: (email: string) => Promise<User>;
}
