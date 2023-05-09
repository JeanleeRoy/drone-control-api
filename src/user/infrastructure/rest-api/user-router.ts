import { Router } from "express";
import getUserController from "./controllers/get-user-controller";

// [-- WE ARE NOT USING THIS FILE --]

const userRouter = Router();

// Routes

// userRouter.post(
//   "/user/register-user",
//   validator(createUserValidator),
//   userController.registerUser
// );

// userRouter.get("/user/list-users", userController.listUsers);

// Example of route from controller

userRouter.post(
  getUserController.route,
  getUserController.middlewares,
  getUserController.handler
);

export default userRouter;
