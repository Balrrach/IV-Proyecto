import { assert } from 'chai'
import { Manager } from '../src/classes/manager'
import { Product } from '../src/classes/product'
import { Restaurant } from '../src/classes/restaurant'


it('Throws Error on unregistered restaurant removal', () => {
	let manager: Manager = new Manager;
	assert.throw(() => { manager.removeRestaurant(new Restaurant([0, 0, 0], 'Pepes', [new Product('Pollo', 1, 1, 20)])) }, Error);
})

