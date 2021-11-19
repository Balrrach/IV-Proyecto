import { assert } from 'chai'
import { Product } from '../src/classes/product'
import { Restaurant } from '../src/classes/restaurant'


it('Throws Error on empty name restaurant', () => {
	assert.throw(() => { new Restaurant([1, 1, 1], '', [new Product('Pollo', 1, 1)]) }, Error);
})

it('Throws Error on empty products restaurant', () => {
	assert.throw(() => { new Restaurant([1, 1, 1], 'Viva la Ensalada', []) }, Error);
})

