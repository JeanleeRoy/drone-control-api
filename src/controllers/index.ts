import { Router } from "express";
import { globSync } from "glob";
// import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").slice(0, -1).join(".");
  return file;
};

// get all routes from files with .controller. in their name
const routes = globSync(PATH_ROUTER + "/**/*.controller.*");

routes.forEach((filePath) => {
  const cleanName = cleanFileName(filePath);
  import(cleanName).then((moduleRouter) => {
    router.use("", moduleRouter.default);
  });
});

/*readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use("", moduleRouter.default);
    });
  }
});*/

export { router };
