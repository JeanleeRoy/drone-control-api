import { Router } from "express";
import { glob } from "glob";
import { Controller } from "~/shared/infrastructure/controller";
import { validateAuth } from "~/shared/infrastructure/middleware/validate-auth";

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
    if (controller.route.includes("/private/")) {
      controller.pushFrontMiddleware(validateAuth)
    }
    router.post(controller.route, controller.middlewares, controller.handler);
  });

  return router;
};

export { getRouter };
