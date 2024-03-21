import { BadRequestError } from '../errors';
import { ValidationError } from 'joi';

export const handleValidationErrors = (err: ValidationError) => {
  throw new BadRequestError('Validation Error', 400, err);
};
