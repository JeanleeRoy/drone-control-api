import { Router } from "express";
import { userController } from "./dependecies";
import requestValidator, { createUserSchema } from "./user-validator";

const userRouter = Router();

// Routes

userRouter.post(
  "/user/register-user",
  requestValidator(createUserSchema),
  userController.registerUser
);

userRouter.get("/user/list-users", userController.listUsers);

export default userRouter;
