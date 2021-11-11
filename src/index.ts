import{ Manager } from './classes/manager';
import{ DeliveryMan } from './classes/delivery_man';
import { loadRestaurants } from './read_files';
import { Restaurant } from './classes/location';


// Read locations
const restaurantsFile = './data/restaurants.json'
let restaurants: Restaurant[] = loadRestaurants(restaurantsFile)

// Instanciate agents
let manager: Manager = new Manager
let deliveryMan: DeliveryMan = new DeliveryMan('Jimmi')

