import{ Manager } from './classes/manager';
import{ DeliveryMan } from './classes/delivery_man';
import { loadLocations } from './classes/location';


// Read locations
loadLocations()

// Instanciate agents
let manager = new Manager
let deliveryMan = new DeliveryMan('Jimmi')

