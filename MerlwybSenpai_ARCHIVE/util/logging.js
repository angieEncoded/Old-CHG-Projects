const path = require('path');
const rootdir = path.join(path.dirname(require.main.filename), 'errorlogs');
const { createLogger, format, transports } = require('winston');
const { prettyPrint } = format;
require('winston-daily-rotate-file');

let mainTransport = '';
if (process.env.DEVELOPMENT === 'true') {
	mainTransport = new transports.Console();
} else {
	mainTransport = new transports.DailyRotateFile({
		filename: 'application-%DATE%.log',
		dirname: rootdir,
		datePattern: 'YYYY-MM-DD-HH',
		zippedArchive: true,
		maxSize: '10m',
		maxFiles: '300'
	});
}

module.exports = logger = createLogger({
	level: 'info',
	format: format.combine(
		format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss'
		}),
		format.errors({ stack: true }),
		format.splat(),
		format.simple(),
		prettyPrint()
	),
	defaultMeta: { service: 'merlwybsenpai' },
	transports: [ mainTransport ]
});
