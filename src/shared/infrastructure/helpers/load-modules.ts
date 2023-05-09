import { globSync } from "glob";
import { Controller } from "../controller";

export const loadModulesFrom = (
  pattern: string,
  callback: (module: any, fileName: string) => void
) => {
  globSync(pattern).forEach((fileName) => {
    const filename = fileName.split(".").slice(0, -1).join(".");
    import(filename).then((module) => {
      callback(module, fileName);
    });
  });
};

export const loadControllers = (dirname: string): Controller[] => {
  const controllers: Controller[] = [];

  loadModulesFrom(`${dirname}/**/*-controller.*`, (module) => {
    if (module.default) controllers.push(module.default);
  });

  return controllers;
};
