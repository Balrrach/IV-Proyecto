import { assert } from 'chai'
import { Product } from '../classes/product'
import { Location, Restaurant } from '../classes/location'


it('Attempting to instanciate location with a number of coordenates different to three throws Error', async () => {
	assert.throw(() => { new Location([1, 1]) }, Error);
})

it('Attempting to instanciate a restaurant with an empty name throws Error', async () => {
	assert.throw(() => { new Restaurant([1, 1, 1], '', [new Product('Pollo', 1, 1)]) }, Error);
})

it('Attempting to instanciate a restaurant with an empty array of Product throws Error', async () => {
	assert.throw(() => { new Restaurant([1, 1, 1], 'Viva la Ensalada', []) }, Error);
})

