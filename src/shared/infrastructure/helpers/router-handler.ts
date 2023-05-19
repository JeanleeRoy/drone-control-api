import { Router } from "express";
import { glob } from "glob";
import { Controller } from "~/shared/infrastructure/controller";

// get all routes from controllers

const getRouter = (cwd: string) => {
  const router = Router();

  const routes = glob.sync(cwd + "/**/*-controller.*", {
    ignore: "**/node_modules/**",
  });

  const controlllers: Controller[] = routes.map(
    (route) => require(route).default
  );

  controlllers.forEach((controller) => {
    console.log(`Loading route ${controller.route}`);
    router.post(controller.route, controller.middlewares, controller.handler);
  });

  return router;
};

export { getRouter };
