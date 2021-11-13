import { assert } from 'chai'
import { tryReadFile, tryParseJson } from '../read_files'


it('Throws Error on inexistant file reading', async () => {
	assert.throw(() => { tryReadFile('inexistantFile.txt') }, Error);
})

it('Throws Error on incorrectly formated json string parsing', async () => {
	assert.throw(() => { tryParseJson('incorrect Json') }, Error);
})
