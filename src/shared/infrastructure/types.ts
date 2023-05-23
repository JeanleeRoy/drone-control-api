import { NextFunction, Request, Response } from "express";

export declare type Params<T> = {
  data: T;
  req: Request;
  res: Response;
};

export interface ControllerHandler<T = unknown, R = unknown> {
  (params: Params<T>): Promise<R | null | void>;
}

export interface InternalHandler {
  (req: Request, res: Response): Response | null | void;
}

export interface MiddlewareHandler {
  (req: Request, res: Response, next: NextFunction): Response | void | Promise<Response | void>;
}

export interface AuthPayload {
  id: string;
  email: string;
  role: string;
}
