import { Config } from "./config";
import * as fs from 'fs';
import { pino } from 'pino';


const config = new Config();
let logDir = config.getLogDir();
let logFile = config.getLogFile();
let logRoute = logDir + logFile;

if(!fs.existsSync(logDir)){
	fs.mkdirSync(logDir);
}

const dest = pino.destination(logRoute);
export const logger = pino(dest);
