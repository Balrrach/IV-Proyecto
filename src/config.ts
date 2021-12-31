import { Etcd3 } from "etcd3";
require('dotenv').config({ path:'./config/configuration_test.env'})


class Config {
	private static instance: Config;

	private logDir: string = '/tmp/logs/'; 
	private logFile: string = 'logs.json';
	private client = new Etcd3();

	private constructor(logDir?: string, logFile?: string){
		this.setLogDir();
		this.setLogFile();
	}

	public static getInstance(): Config {
		if (!Config.instance) {
			Config.instance = new Config();
		}

		return Config.instance;
	}


	private setLogDir() {
		let environmentLogDir = process.env.LOG_DIR;

		if(environmentLogDir != undefined){
			this.logDir = String(environmentLogDir);
		}
	}

	private setLogFile() {
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
