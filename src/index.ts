import{ Manager } from './classes/manager';
import{ DeliveryMan } from './classes/delivery_man';
import { loadLocations } from './read_files';


// Read locations
loadLocations()

// Instanciate agents
let manager = new Manager
let deliveryMan = new DeliveryMan('Jimmi')

