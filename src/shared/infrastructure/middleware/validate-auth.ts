import { NextFunction, Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { AuthPayload } from "~/shared/domain/auth-entity";
import JwtProvider from "~/shared/infrastructure/provider/token-jwt";


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

  const payload = await JwtProvider.verifyToken<AuthPayload>(token);
  if (!payload?.userId || !payload?.email) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "Not authorized" });
  }

  console.log("[validateAuth] end", payload);

  next();
};
