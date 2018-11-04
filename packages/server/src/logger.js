const path = require('path');
const winston = require('winston');

const logPath = path.join(__dirname, 'logs');

const options = {
  file: {
    level: 'info',
    filename: `${logPath}/app.log`,
    handleExceptions: true,
    json: true,
    maxSize: 524880,
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

logger.stream = {
  write: (message, encoding) => {
    logger.info(message);
  },
};

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}

module.exports = logger;
