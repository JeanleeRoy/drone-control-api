import { User } from "~/user/domain/user-entity";
import { userUseCases } from "./dependecies";
import { LoginUserResponse, UserResponse } from "./types";

const getUserResponse = (user: User): UserResponse => ({
  uuid: user.uuid,
  name: user.name,
  email: user.email,
});

export const getUserService = async (
  uuid: string
): Promise<UserResponse | null> => {
  const user = await userUseCases.getUserById(uuid);

  if (!user) return null;

  return getUserResponse(user);
};

export const registerUserService = async (
  name: string,
  email: string,
  password: string
): Promise<UserResponse> => {
  const user = await userUseCases.createUser({ name, email, password });

  return getUserResponse(user);
};

export const getAllUsersService = async (): Promise<UserResponse[]> => {
  const users = await userUseCases.listUsers();

  return users.map(getUserResponse);
};

export const loginUserService = async (
  email: string,
  password: string
): Promise<LoginUserResponse | null> => {
  const payload = await userUseCases.loginUser(email, password);

  if (!payload) return null;

  return { token: payload.token };
};
