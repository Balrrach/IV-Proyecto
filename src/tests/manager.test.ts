import { assert } from 'chai'
import { Manager } from '../classes/manager'
import { Product } from '../classes/product'
import { Location, Restaurant } from '../classes/location'


it('Throws Error on unregistered restaurant removal', () => {
	let manager: Manager = new Manager;
	assert.throw(() => { manager.removeRestaurant(new Restaurant([0, 0, 0], 'Pepes', [new Product('Pollo', 1, 1)])) }, Error);
})

