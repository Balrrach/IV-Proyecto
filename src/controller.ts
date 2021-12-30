import { Config } from "./config";
import { pino } from 'pino';
import * as fs from 'fs';
import { connect } from 'http2';


class Controller {
	private static instance: Controller;

	public config: Config = Config.getInstance();
	private logger: pino.Logger = pino();

	private constructor(config?: Config){
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
			try { fs.mkdirSync(logDir, {recursive: true}) }
			catch (err) { console.error(err) }
		}

		const dest = pino.destination(logRoute);
		this.logger = pino(dest);
	}

	public static getInstance(): Controller {
		if (!Controller.instance) {
			Controller.instance = new Controller();
		}

		return Controller.instance;
	}


	getLogger(): any {
		return this.logger;
	}
}


export { Controller }
