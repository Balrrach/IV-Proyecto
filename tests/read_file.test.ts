import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
import { tryReadFile, tryParseJson } from '../src/read_files'
const expect = chai.expect;
const assert = chai.assert;


it('Throws Error on inexistant file', async () => {
	await expect(tryReadFile('inexistantFile.txt')).to.be.rejectedWith(Error);
})

it('Throws Error on incorrectly formated json string', async () => {
	assert.throw(() => { tryParseJson('incorrect Json') }, Error);
})
