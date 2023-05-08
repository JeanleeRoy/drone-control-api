import { Router } from "express";
import { globSync } from "glob";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").slice(0, -1).join(".");
  return file;
};

// get all routes from router files

const routes = globSync(PATH_ROUTER + "/**/*-router.*");

routes.forEach((filePath) => {
  console.log(`Loafing routes from ${filePath.split("/").pop()}`);
  const cleanName = cleanFileName(filePath);
  import(cleanName).then((moduleRouter) => {
    router.use("", moduleRouter.default);
  });
});

export { router };
