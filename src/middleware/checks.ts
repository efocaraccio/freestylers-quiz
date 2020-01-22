import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";

export const checkSearchParam = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.country) {
    throw new HTTP400Error("Missing q parameter");
  } else {
    next();
  }
};


export const checkCountryParam = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.country) {
    throw new HTTP400Error("Missing q parameter");
  } else {
    next();
  }
};


export const throwError = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      throw new HTTP400Error("Error forzado");
    
};