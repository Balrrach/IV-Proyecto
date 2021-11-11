import { assert } from 'chai'
import { Product } from '../classes/product'


it('Empty name on a new product throws Error', async () => {
	assert.throw(() => { new Product('', 1, 1) }, Error);
})

it('Negative weight on a new product throws Error', async () => {
	assert.throw(() => { new Product('Pollo Asado', 0, 1) }, Error);
})

it('Negative price on a new product throws Error', async () => {
	assert.throw(() => { new Product('Pollo Asado', 10, -2) }, Error);
})
