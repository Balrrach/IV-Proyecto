import { assert } from 'chai'
import { tryReadFile, tryParseJson } from '../read_files'


it('Attempting to read an inexistant file throws Error', async () => {
	assert.throw(() => { tryReadFile('inexistantFile.txt') }, Error);
})

it('Attempting to parse an incorrectly formated json string throws Error', async () => {
	assert.throw(() => { tryParseJson('incorrect Json') }, Error);
})
