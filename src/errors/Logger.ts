import winston, { createLogger } from 'winston';

export default class MyLogger {
  private static myLogger = createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

  static writeErrorLog(msg: string): void {
    this.myLogger.error({
      timeStamp: new Date().toLocaleString(),
      message: msg,
    });
  }

  static writeInfoLog(msg: string): void {
    this.myLogger.info({
      timeStamp: new Date().toLocaleString(),
      message: msg,
    });
  }
}
// const logger = new Logger({
//   transports: [
//     new transports.Console({
//       level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
//       handleExceptions: true,
//       json: false,
//       colorize: true,
//     }),
//     new transports.File({
//       filename: 'debug.log',
//       level: 'info',
//       handleExceptions: true,
//       json: true,
//       colorize: false,
//     }),
//   ],
//   exitOnError: false,
// });

// if (process.env.NODE_ENV !== 'production') {
//   logger.debug('Logging initialized at debug level');
// }

// logger.stream = split().on('data', function (message: string) {
//   logger.info(message);
// });

// export default logger;

// import winston from 'winston';

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   defaultMeta: { service: 'user-service' },
//   transports: [
//     //
//     // - Write all logs with level `error` and below to `error.log`
//     // - Write all logs with level `info` and below to `combined.log`
//     //
//     new winston.transports.File({ filename: 'error.log', level: 'error' }),
//     new winston.transports.File({ filename: 'combined.log' }),
//   ],
// });

// //
// // If we're not in production then log to the `console` with the format:
// // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// //
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.simple(),
//     }),
//   );
// }
//
