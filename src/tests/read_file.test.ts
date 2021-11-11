import { assert } from 'chai'
import { tryReadFile, tryParseJson } from '../read_files'


it('Reading an inexistant file throws Error', async () => {
	assert.throw(() => { tryReadFile('inexistantFile.txt') }, Error);
})

it('Trying to parse an incorrectly formated json string throws Error', async () => {
	assert.throw(() => { tryParseJson('incorrect Json') }, Error);
})
