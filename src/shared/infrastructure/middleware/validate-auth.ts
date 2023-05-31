import { NextFunction, Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { AuthPayload } from "~/shared/domain/auth-entity";
import JwtProvider from "~/shared/infrastructure/provider/token-jwt";

export const validateAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("\n[validateAuth] start");

  const { authorization } = req.headers;
  if (!authorization) {
    console.log("[validateAuth] token not provided");
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: ReasonPhrases.UNAUTHORIZED });
  }
  const token = authorization.split(" ")[1];

  const payload = await JwtProvider.verifyToken<AuthPayload>(token);
  console.log("[validateAuth] payload", payload);
  if (!payload?.userId || !payload?.email) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Not authorized" });
  }

  console.log("[validateAuth] end");

  next();
};
