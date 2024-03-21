import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

import { User } from '../models/user';
import { handleValidationErrors } from '../utils';
import { authSchema } from '../validation-schema/auth/signupSchema';

const jwtExpiryTime = 24 * 60 * 60; // 1 day
const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtKey = process.env.JWT_KEY!;
    const { error, value } = authSchema.validate(req.body);
    if (error) handleValidationErrors(error);

    const user = await User.findOne({ email: value.email });
    if (!user) {
      res.status(404).send({
        success: false,
        message: 'User not found'
      });
    } else if (user.password !== value.password) {
      res.status(401).send({
        success: false,
        message: 'password is incorrect'
      });
    } else {
      const token = jwt.sign({ email: user.email }, jwtKey, {
        algorithm: 'HS256',
        expiresIn: jwtExpiryTime
      });

      res.status(200).send({
        success: true,
        data: { token }
      });
    }
  } catch (err) {
    next(err);
  }
};

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, value } = authSchema.validate(req.body);
    if (error) return handleValidationErrors(error);
    const user = new User({ email: value.email, password: value.password });
    const userRes = await user.save();
    return res.status(200).send({
      success: true,
      data: { user: userRes }
    });
  } catch (err) {
    return next(err);
  }
};

export { login, signup };
