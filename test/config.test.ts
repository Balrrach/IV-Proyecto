import { expect } from 'chai'
import { Config } from '../src/config'


it('Server config files are are used when present', () => {})

it('Environment config files are used when present and server config files not present', () => {
	require('dotenv').config({ path:'./config/configuration_test.env'});
	let noServerConfig = Config.getInstance();
	let environmentLogDir = process.env.LOG_DIR;
	let environmentLogFile = process.env.LOG_FILE;

	expect(noServerConfig.getLogDir()).to.equal(environmentLogDir);
	expect(noServerConfig.getLogFile()).to.equal(environmentLogFile);
})

it('Default config files are used when server and evironment config files are not present', () => {
	require('dotenv').config({ path:'nonexistent_enviroment_file'});
	let noServerNoEnvironmentConfig = Config.getInstance();

	expect(noServerNoEnvironmentConfig.getLogDir()).to.equal('../tmp/logs/');
	expect(noServerNoEnvironmentConfig.getLogFile()).to.equal('logs.json');
})

