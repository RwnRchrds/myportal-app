export class AppError {
  originalError: any;
  errorMessage: string;

  constructor(originalError: any, errorMessage: string) {
    this.originalError = originalError;
    this.errorMessage = errorMessage;
  }
}
