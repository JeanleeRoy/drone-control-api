import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";

export const requestValidator = (schema: Joi.ObjectSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
    next();
  };
};
