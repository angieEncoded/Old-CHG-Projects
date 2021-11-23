const path = require('path');
const rootdir = path.join(path.dirname(require.main.filename), 'errorlogs');
const { createLogger, format, transports } = require('winston');
const { prettyPrint } = format;
require('winston-daily-rotate-file');

const transportToFile = new (transports.DailyRotateFile)({
    filename: 'CrystalHavenGaming-%DATE%.log',
    dirname: rootdir,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '10m',
    maxFiles: '300'
})

module.exports = logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // can hide some messages
        //ignorePrivate(),
        format.errors({ stack: true }),
        format.splat(),
        format.simple(),
        prettyPrint()
    ),
    defaultMeta: { service: 'crystalHavenGaming' },
    transports: [
        transportToFile,
        // log to console as well
        new transports.Console()
    ]
})
