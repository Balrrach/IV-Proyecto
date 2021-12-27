import { Etcd3 } from "etcd3";
require('dotenv').config({ path:'./config/configuration.env'})


class Config {
	public Ready: Promise<any>;
	private logFile: string = '';
	private logDir: string = ''; 
	private client = new Etcd3();

	readonly defaultLogFile: string = 'logs.json'
	readonly defaultLogDir: string = '/tmp/logs/'

	constructor(defaultLogFile?: string, defaultLogDir?: string){
		if(defaultLogFile)
			this.defaultLogFile = defaultLogFile;
		if(defaultLogDir)
			this.defaultLogDir = defaultLogDir;

		this.Ready = new Promise((resolve, reject) => {
			this.readLogFile().then(res => { this.logFile = res; });
			this.readLogDir().then(res => { this.logDir = res; });
			resolve(undefined);
		})
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

	public getLogFile(): string {
		return this.logFile;
	}

	public getLogDir(): string {
		return this.logDir;
	}
}


export {Config}
