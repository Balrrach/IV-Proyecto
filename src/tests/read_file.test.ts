import { assert } from 'chai'
import { tryReadFile, tryParseJson } from '../read_files'


it('tryReadFile() throws Error', async () => {
	assert.throw(() => { tryReadFile('inexistantFile.txt') }, Error);
})

it('tryParseJson() throws Error', async () => {
	assert.throw(() => { tryParseJson('incorrect Json') }, Error);
})
