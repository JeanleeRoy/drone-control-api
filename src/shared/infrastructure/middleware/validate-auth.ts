import { NextFunction, Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { verifyToken } from "../helpers/jwt-helper";
import { AuthPayload } from "../types";

export const validateAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("[validateAuth] start");

  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: ReasonPhrases.UNAUTHORIZED });
  }
  const token = authorization.split(" ")[1];

  const payload = await verifyToken<AuthPayload>(token);
  if (!payload?.id || !payload?.email) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "Not authorized" });
  }

  console.log("[validateAuth] end", payload);

  next();
};
