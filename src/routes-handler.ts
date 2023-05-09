import { Router } from "express";
import { globSync } from "glob";
import { Controller } from "./shared/infrastructure/controller";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").slice(0, -1).join(".");
  return file;
};

// get all routes from controllers

const controllerFiles = globSync(PATH_ROUTER + "/**/*-controller.*");

controllerFiles.forEach((filePath) => {
  // console.log(`Loafing ${filePath.split("/").pop()}`);
  const cleanName = cleanFileName(filePath);
  import(cleanName).then((module) => {
    // const _router = moduleRouter.default;
    // router.use("", _router);
    if (module.default) {
      // console.log(`Loading route ${module.default.route}`);
      const controller = module.default as Controller;
      router.post(controller.route, controller.middlewares, controller.handler);
    }
  });
});

export { router };
