const winston = require("winston");
const { format, transports } = winston;
const path = require("path");
const DailyRotateFile = require("winston-daily-rotate-file");
const chalk = require("chalk");

// Define the format for log messages
const logFormat = format.printf(
  ({
    timestamp,
    message,
    level,
    method,
    url,
    statusCode,
    responseTime,
    // headers,
    // body
    stack
  }) => {
    // Define log levels colors
    const levelColors = {
      info: chalk.blue,
      error: chalk.red,
      warn: chalk.yellow
    };

    const levelColor = levelColors[level] || chalk.white;

    // Create the formatted message
    return `⌚${chalk.gray(timestamp)} [${levelColor(level)}]: ${message ? `message-> ${chalk.cyan(message)}` : ""} ${method ? `Method: ${chalk.cyan(method)}` : ""} ${url ? `URL: ${chalk.green(url)}` : ""} ${statusCode ? `Status-Code: ${chalk.magenta(statusCode)}` : ""} ${responseTime ? `Response-Time⌛: ${chalk.yellow(responseTime + "ms")}` : ""} ${stack ? `\n${chalk.red(stack)}` : ""}`;
  }
);

// Configure daily rotating log files
const dailyRotateFileTransport = new DailyRotateFile({
  filename: path.join(__dirname, "../../logs", "application-%DATE%.log"),
  datePattern: "YYYY-MM-DD",
  maxFiles: "14d", // Keep logs for 14 days
  maxSize: "20m", // Max file size before rotation
  zippedArchive: true // Compress old logs
});

const logger = winston.createLogger({
  level: "info",
  format: format.combine(format.timestamp(), logFormat),
  transports: [new transports.Console(), dailyRotateFileTransport]
});

module.exports = logger;