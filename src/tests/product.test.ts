import { assert } from 'chai'
import { Product } from '../classes/product'


it('Throws Error on empty name product instanciation', async () => {
	assert.throw(() => { new Product('', 1, 1) }, Error);
})

it('Throws Error on negative weight product instanciation', async () => {
	assert.throw(() => { new Product('Pollo Asado', 0, 1) }, Error);
})

it('Throws Error on negative price product instanciation', async () => {
	assert.throw(() => { new Product('Pollo Asado', 10, -2) }, Error);
})
