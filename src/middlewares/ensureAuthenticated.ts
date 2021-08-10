import { Request, Response, NextFunction, response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  respose: Response,
  next: NextFunction,
) {
  //Receber token
  const authToken = request.headers.authorization


  // Validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    // Validar token
    const { sub } = verify(token, "cc92234d5731ce654d089f4335cdbd98") as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
  // Recuperar informação



}