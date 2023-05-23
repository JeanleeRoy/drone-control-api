import jwt from "jsonwebtoken";

export const signToken = async (payload: any) => {
  return jwt.sign(payload, `${process.env.JWT_SECRET}`, {
    expiresIn: "2h",
  });
};

export const verifyToken = async <T>(token: string): Promise<T | null> => {
  try {
    return jwt.verify(token, `${process.env.JWT_SECRET}`) as T;
  } catch (e) {
    return null;
  }
};
