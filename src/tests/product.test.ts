import { assert } from 'chai'
import { Product } from '../classes/product'


it('Attempting to instanciate a product with an empty name throws Error', async () => {
	assert.throw(() => { new Product('', 1, 1) }, Error);
})

it('Attempting to instanciate a product with a negative weight throws Error', async () => {
	assert.throw(() => { new Product('Pollo Asado', 0, 1) }, Error);
})

it('Attempting to instanciate a product with a negative price throws Error', async () => {
	assert.throw(() => { new Product('Pollo Asado', 10, -2) }, Error);
})
