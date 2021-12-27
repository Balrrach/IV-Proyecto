import{ Manager } from './classes/manager';
import{ DeliveryMan } from './classes/delivery_man';
import { loadRestaurants } from './read_files';
import { Restaurant } from './classes/restaurant';
import { Product } from './classes/product'
import { controller } from './controller'

// Read locations
controller.config.Ready.then( () => {
	const restaurantsFile = './data/restaurants.json';
	let restaurants: Promise<Restaurant[]> = loadRestaurants(restaurantsFile);

	// Instanciate agents
	restaurants.then(restaurants =>{
		let manager: Manager = new Manager(restaurants);
		let deliveryMan: DeliveryMan = new DeliveryMan('Jimmi', [0, 0, 0]);
		manager.addDeliveryMan(deliveryMan);
		manager.listRestaurants();
	})

	let manager: Manager = new Manager();
	let newRestaurant = new Restaurant([1, 1, 1], "Alfredo's", [new Product('Pollo', 1, 1, 20)])
	manager.removeRestaurant(newRestaurant)
})
