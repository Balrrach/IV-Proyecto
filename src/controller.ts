import { Config } from "./config";
import { pino } from 'pino';
import * as fs from 'fs';


class Controller {
	private config: Config = new Config();
	private logger: any;

	constructor(config?: Config){
		if(config){
			this.config = config;
		}
		this.createLogger();
	}

	createLogger(){
		let logDir = this.config.getLogDir();
		let logFile = this.config.getLogFile();
		let logRoute = logDir + logFile;

		if(!fs.existsSync(logDir)){
			fs.mkdirSync(logDir);
		}

		const dest = pino.destination(logRoute);
		this.logger = pino(dest);
	}

}


export { Controller }
