import { Config } from "./config";
import { pino } from 'pino';
import Hapi from '@hapi/hapi';
import * as fs from 'fs';


class Controller {
	private static instance: Controller;

	public config: Config = Config.getInstance();
	private logger: pino.Logger = pino();
	private server: Hapi.Server = Hapi.server();

	private constructor(){
		this.createLogger();
		this.createServer();
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

	private createServer(){
		this.server = Hapi.server({
			port: this.config.getServerPort(),
			host: this.config.getServerHost(),
		});
	}

	public static getInstance(): Controller {
		if (!Controller.instance) {
			Controller.instance = new Controller();
		}

		return Controller.instance;
	}


	public getLogger(): pino.Logger {
		return this.logger;
	}

	public getServer(): Hapi.Server {
		return this.server;
	}
}


export { Controller }
