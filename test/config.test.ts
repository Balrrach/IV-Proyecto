import { expect } from 'chai'
import { assert } from 'chai'
import { Config } from '../src/config'


it('Server config files are are used when present', () => {})

it('Environment config files are used when present and server config files not present', () => {
	require('dotenv').config({ path:'./config/configuration.env'})
	let noServerConfig = new Config()
	let environmentLogFile = process.env.LOG_FILE;
	let environmentLogDir = process.env.LOG_DIR;

	noServerConfig.Ready.then(() => {
		expect(noServerConfig.getLogFile()).to.equal(environmentLogFile);
		expect(noServerConfig.getLogDir()).to.equal(environmentLogDir);
	})
})

it('Default config files are used when server and evironment config files are not present', () => {
	require('dotenv').config({ path:'nonexistentPath'})
	let noServerNoEnvironmentConfig = new Config()

	noServerNoEnvironmentConfig.Ready.then(() => {
		expect(noServerNoEnvironmentConfig.getLogFile()).to.equal(noServerNoEnvironmentConfig.defaultLogFile);
		expect(noServerNoEnvironmentConfig.getLogDir()).to.equal(noServerNoEnvironmentConfig.defaultLogDir);
	})
})

