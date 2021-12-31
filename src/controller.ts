import { Config } from "./config";
import { pino } from 'pino';
import * as fs from 'fs';
import { connect } from 'http2';


class Controller {
	private static instance: Controller;

	public config: Config = Config.getInstance();
	private logger: pino.Logger = pino();

	private constructor(logger?: pino.Logger){
		if(logger)
			this.logger = logger;
		else
			this.createLogger();
	}

	private createLogger(){
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


	public getLogger(): any {
		return this.logger;
	}
}


export { Controller }
