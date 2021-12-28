import{ Manager } from './classes/manager';
import{ DeliveryMan } from './classes/delivery_man';
import { loadRestaurants } from './read_files';
import { Restaurant } from './classes/restaurant';
import { Product } from './classes/product'
import { controller } from './controller'


// Read locations
const restaurantsFile = './data/restaurants.json';
let restaurants: Promise<Restaurant[]> = loadRestaurants(restaurantsFile);

// Instanciate agents
restaurants.then(restaurants =>{
	let manager: Manager = new Manager(restaurants);
	let deliveryMan: DeliveryMan = new DeliveryMan('Jimmi', [0, 0, 0]);
	manager.addDeliveryMan(deliveryMan);
	manager.listRestaurants();
})

