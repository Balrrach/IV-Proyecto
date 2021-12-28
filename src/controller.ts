import { Config } from "./config";
import { pino } from 'pino';
import * as fs from 'fs';


class Controller {
	public Ready: Promise<any>;
	public config: Config = new Config();
	private logger: any;

	constructor(config?: Config){
		if(config){
			this.config = config;
		}

		this.Ready = Promise.all([
			this.config.Ready.then(() => {
				this.createLogger();
			})
		])
	}

	async createLogger(){
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


	getLogger(): any {
		return this.logger;
	}
}


const controller = new Controller();
export { controller }
