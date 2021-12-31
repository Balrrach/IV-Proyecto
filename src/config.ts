import { Etcd3 } from "etcd3";
<<<<<<< HEAD
import Hapi from '@hapi/hapi';
require('dotenv').config({ path:'./config/configuration.env'})
=======
require('dotenv').config({ path:'./config/configuration_test.env'})
>>>>>>> Objetivo-7


class Config {
	private static instance: Config;

	private logDir: string = '/tmp/logs/'; 
	private logFile: string = 'logs.json';
	private client = new Etcd3();
	private serverPort: number = 3000;
	private serverHost: string = 'localhost';

<<<<<<< HEAD
	private constructor(defaultLogDir?: string, defaultLogFile?: string){
		if(defaultLogDir)
			this.logDir = defaultLogDir;
		if(defaultLogFile)
			this.logFile = defaultLogFile;

		this.ready = Promise.all([
			this.setLogDir(),
			this.setLogFile(),
			this.setServerPort(),
			this.setServerHost(),
		])
=======
	private constructor(logDir?: string, logFile?: string){
		this.setLogDir();
		this.setLogFile();
>>>>>>> Objetivo-7
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
	
	async setServerPort() {
		let environmentServerPort= process.env.SERVER_PORT;

		if(environmentServerPort != undefined){
			this.serverPort = Number(environmentServerPort);
		}
	}

	async setServerHost() {
		let environmentServerHost = process.env.SERVER_HOST;

		if(environmentServerHost != undefined){
			this.serverHost = environmentServerHost;
		}
	}


	public getLogDir(): string {
		return this.logDir;
	}

	public getLogFile(): string {
		return this.logFile;
	}

	public getServerPort(): number {
		return this.serverPort;
	}

	public getServerHost(): string {
		return this.serverHost;
	}
}


export {Config}
