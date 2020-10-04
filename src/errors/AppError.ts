import MyLogger from './Logger';

class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
    MyLogger.writeErrorLog(message);
  }
}
export default AppError;
