import { CustomError } from './CustomError'

export class UnauthorizedError extends CustomError {
  constructor(message: string, code: number = 401, details: object) {
    super(message, code, details)
    this.name = 'UnauthorizedError'
  }
}
