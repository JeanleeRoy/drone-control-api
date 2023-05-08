import { Request, Response } from "express";
import { UserUseCases } from "../../application";
import { CreateUserRequest } from "./user-interfaces";

export class UserController {
  constructor(private readonly userUseCases: UserUseCases) {}

  registerUser = async ({ body }: Request, res: Response) => {
    console.log("[UserController] registerUser");
    const request: CreateUserRequest = body;
    const { email, name, password } = request;
    const user = await this.userUseCases.createUser({ email, name, password });
    console.log("[UserController] registerUser end");
    res.status(200).json(user);
  };

  listUsers = async (req: Request, res: Response) => {
    console.log("[UserController] listUsers");
    const users = await this.userUseCases.listUsers();
    console.log("[UserController] listUsers end");
    res.status(200).json(users);
  }
}
