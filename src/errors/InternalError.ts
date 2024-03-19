import { CustomError } from './CustomError'

class InternalError extends CustomError {
  constructor(message: string, code: number = 500, details: object) {
    super(message, code, details)
    this.name = 'InternalError'
  }
}

export default InternalError
