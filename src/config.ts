import { Etcd3 } from "etcd3";
require('dotenv').config({ path:'./config/configuration.env'})


class Config {
	public Ready: Promise<any>;
	private logDir: string = ''; 
	private logFile: string = '';
	private client = new Etcd3();

	readonly defaultLogDir: string = '/tmp/logs/'
	readonly defaultLogFile: string = 'logs.json'

	constructor(defaultLogDir?: string, defaultLogFile?: string){
		if(defaultLogDir)
			this.defaultLogDir = defaultLogDir;
		if(defaultLogFile)
			this.defaultLogFile = defaultLogFile;

		this.Ready = new Promise((resolve, reject) => {
			this.readLogDir().then(res => { this.logDir = res; });
			this.readLogFile().then(res => { this.logFile = res; });
			resolve(undefined);
		})
	}


	async readLogDir() {
		let serverLogDir = await this.client.get('LOG_DIRECTORY').string().catch(err => {});
		let environmentLogDir = process.env.LOG_DIR;

		if(serverLogDir != null){
			return serverLogDir;
		}
		else if(environmentLogDir != undefined){
			return String(environmentLogDir);
		}
		else{
			return this.defaultLogDir;
		}
	}

	async readLogFile() {
		let serverLogFile = await this.client.get('LOG_FILE').string().catch(err => {});
		let environmentLogFile = process.env.LOG_FILE;

		if(serverLogFile != null){
			return serverLogFile;
		}
		else if(environmentLogFile!= undefined){
			return String(environmentLogFile);
		}
		else{
			return this.defaultLogFile;
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
