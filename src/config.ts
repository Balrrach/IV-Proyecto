import { Etcd3 } from "etcd3";
import Hapi from '@hapi/hapi';
require('dotenv').config({ path:'./config/configuration_test.env'})


class Config {
	private static instance: Config;

	private logDir: string = '/tmp/logs/'; 
	private logFile: string = 'logs.json';
	private client = new Etcd3();
	private serverPort: number = 3000;
	private serverHost: string = 'localhost';

	private constructor(){
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
