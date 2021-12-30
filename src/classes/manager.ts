import { RouteCalculator } from './route_calculator';
import { Restaurant } from './restaurant';
import { Order } from './order';
import { Route } from './route';
import { DeliveryMan } from './delivery_man';
import { Controller } from '../controller'

const logger = (Controller.getInstance()).getLogger().child({ module: 'Manager'})


class Manager {
  private routeCalculator: RouteCalculator = new RouteCalculator();
  private restaurants: Restaurant[] = []


  constructor(restaurants: Restaurant[] = []) {
	  this.restaurants = restaurants;

	  logger.info("Object correctly instantiated");
  }


  addRestaurant(restaurant: Restaurant) {
	  this.restaurants.push(restaurant);

	  logger.info("Restaurant correctly added");
  }

  removeRestaurant(restaurant: Restaurant) {
	  let index = this.restaurants.indexOf(restaurant);
	  if( index >= 0) {
		  this.restaurants.splice(index, 1);
	  }
	  else{
		  logger.error("Tried to delete inexistant restaurant", restaurant);
		  throw new Error("Tried to delete inexistant restaurant");
	  }
  }

  async listRestaurants() {
	  await console.log(this.restaurants);
  }


  addDeliveryMan(deliveryMan: DeliveryMan) {
	  this.routeCalculator.addDeliveryMan(deliveryMan);
  }

  removeDeliveryMan(deliveryMan: DeliveryMan) {
	  this.routeCalculator.removeDeliveryMan(deliveryMan);
  }

  deliveryManPicksUpProduct(productID: number) {}


  addOrder(orders: Order[]) {
	  this.routeCalculator.addOrders(orders);
  }
}


export { Manager }
