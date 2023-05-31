import { ObjectSchema } from "joi";
import { requestValidator } from "./middleware/validate-request";
import { ControllerHandler, InternalHandler, MiddlewareHandler } from "./types";
import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

export class Controller<T = unknown, R = unknown> {
  route: string[];
  handler: InternalHandler;
  middlewares: MiddlewareHandler[] = [];

  constructor(route: string | string[], handler: ControllerHandler<T, R>) {
    this.route = Array.isArray(route) ? route : [route];
    this.handler = this.buildHandler(handler);
  }

  private buildHandler(handler: ControllerHandler<T, R>) {
    return (req: Request, res: Response) => {
      const data: T = req.body as T;
      handler({ data, req, res })
        .then((response) => {
          if (response === null) {
            return res
              .status(StatusCodes.NOT_FOUND)
              .json({ message: "Resource not found" });
          }
          const body = {
            success: true,
            ...(response && { data: response }),
          };
          return res.status(StatusCodes.OK).json(body);
        })
        .catch((error: Error) => {
          console.error("[Controller]", error);
          return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
          });
        });
    };
  }

  validator(schema: ObjectSchema<T>) {
    const validator: MiddlewareHandler = requestValidator(schema);
    this.middlewares.push(validator);
    return this;
  }

  addMiddleware(middleware: MiddlewareHandler | MiddlewareHandler[]) {
    if (Array.isArray(middleware)) {
      this.middlewares.push(...middleware);
    } else {
      this.middlewares.push(middleware);
    }
    return this;
  }

  pushFrontMiddleware(middleware: MiddlewareHandler | MiddlewareHandler[]) {
    if (Array.isArray(middleware)) {
      this.middlewares.unshift(...middleware);
    } else {
      this.middlewares.unshift(middleware);
    }
    return this;
  }
}
