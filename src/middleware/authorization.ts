import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const authorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  console.log('token: ', token);
  if (!token) {
    res.status(401).send({
      status: false,
      message: 'Token is required'
    });
  } else {
    const payload = jwt.verify(token, process.env.JWT_KEY!);
    console.log('payload: ', payload);
    next();
  }
};
