import { CustomError } from './CustomError'
export class BadRequestError extends CustomError {
  constructor(message: string, code: number = 400, details: object = {}) {
    super(message, code, details)
    this.name = 'BadRequestError'
  }
}
