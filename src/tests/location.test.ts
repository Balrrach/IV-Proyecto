import { assert } from 'chai'
import { Product } from '../classes/product'
import { Location, Restaurant } from '../classes/location'


it('Throws Error on empty name restaurant', () => {
	assert.throw(() => { new Restaurant([1, 1, 1], '', [new Product('Pollo', 1, 1)]) }, Error);
})

it('Throws Error on empty products restaurant', () => {
	assert.throw(() => { new Restaurant([1, 1, 1], 'Viva la Ensalada', []) }, Error);
})

