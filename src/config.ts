import { Etcd3 } from "etcd3";
require('dotenv').config({ path:'./config/configuration.env'})


class Config {
	private static instance: Config;
	public ready: Promise<any>;

	private logDir: string = 'tmp/logs/'; 
	private logFile: string = 'logs.json';
	private client = new Etcd3();

	private constructor(defaultLogDir?: string, defaultLogFile?: string){
		if(defaultLogDir)
			this.logDir = defaultLogDir;
		if(defaultLogFile)
			this.logFile = defaultLogFile;

		this.ready = Promise.all([
			this.setLogDir(),
			this.setLogFile(),
		])
	}

	public static getInstance(): Config {
		if (!Config.instance) {
			Config.instance = new Config();
		}

		return Config.instance;
	}


	async setLogDir() {
		let environmentLogDir = process.env.LOG_DIR;

		if(environmentLogDir != undefined){
			this.logDir = String(environmentLogDir);
		}
	}

	async setLogFile() {
		let environmentLogFile = process.env.LOG_FILE;

		if(environmentLogFile!= undefined){
			this.logFile = String(environmentLogFile);
		}
	}


	public getLogDir(): string {
		return this.logDir;
	}

	public getLogFile(): string {
		return this.logFile;
	}
}


export {Config}
