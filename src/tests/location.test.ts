import { assert } from 'chai'
import { Product } from '../classes/product'
import { Location, Restaurant } from '../classes/location'


it('Throws Error on empty name restaurant', async () => {
	assert.throw(() => { new Restaurant([1, 1, 1], '', [new Product('Pollo', 1, 1)]) }, Error);
})

it('Throws Error on empty products restaurant', async () => {
	assert.throw(() => { new Restaurant([1, 1, 1], 'Viva la Ensalada', []) }, Error);
})

