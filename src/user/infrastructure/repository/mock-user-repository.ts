import { User } from "../../domain/user-entity";
import { UserRepository } from "../../domain/user-repository";

const MOCK_USERS: User[] = [
  {
    name: "Jeanlee",
    description: "hola",
    uuid: "30cb9020-ee89-11ed-a05b-0242ac120003",
    email: "user@email.com",
    password: "123456",
  },
];

export class MockUserRepository implements UserRepository {
  getUserById = async (uuid: string): Promise<User | null> => {
    const user = MOCK_USERS.find((user) => user.uuid === uuid);
    if (!user) return null;

    return user;
  };

  createUser = async (user: User): Promise<User> => {
    console.log("[MockUserRepository] createUser");
    MOCK_USERS.push(user);
    console.log("[MockUserRepository] createUser end");
    return user;
  };

  updateUser = async (uuid: string, user: User): Promise<User> => {
    const userIndex = MOCK_USERS.findIndex((user) => user.uuid === uuid);
    if (userIndex === -1) throw new Error("User not found");
    MOCK_USERS[userIndex] = user;

    return user;
  };

  deleteUser = async (uuid: string): Promise<User> => {
    const userIndex = MOCK_USERS.findIndex((user) => user.uuid === uuid);
    if (userIndex === -1) throw new Error("User not found");
    const user = MOCK_USERS[userIndex];
    MOCK_USERS.splice(userIndex, 1);

    return user;
  };

  listUsers = async (): Promise<User[]> => {
    return MOCK_USERS;
  };
}
