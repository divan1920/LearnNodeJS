export class CustomError extends Error {
  constructor(message: string, code: number, details: object) {
    super(message || String(code))
    this.code = code
    this.name = 'CustomError'

    if (details) {
      this.details = details
    }
  }

  code: number
  details?: object
}
