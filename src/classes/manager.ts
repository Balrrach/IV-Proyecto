import { RouteCalculator } from './route_calculator';
import { Restaurant } from './restaurant';
import { Order } from './order';
import { Route } from './route';
import { DeliveryMan } from './delivery_man';
import { controller } from '../controller'
const loggerPromise = controller.getLogger().then((baseLogger) => {
	 return baseLogger.child({ module: 'Manager'})
})


class Manager {
  private routeCalculator: RouteCalculator = new RouteCalculator();
  private restaurants: Restaurant[] = []


  constructor(restaurants: Restaurant[] = []) {
	  this.restaurants = restaurants;

	  loggerPromise.then(loggerReady => {
		  loggerReady.info("Object correctly instantiated");
	  })
  }


  addRestaurant(restaurant: Restaurant) {
	  this.restaurants.push(restaurant);

	  loggerPromise.then(loggerReady => {
		  loggerReady.info("Restaurant correctly added");
	  })
  }

  removeRestaurant(restaurant: Restaurant) {
	  let index = this.restaurants.indexOf(restaurant);
	  if( index >= 0) {
		  this.restaurants.splice(index, 1);
	  }
	  else{
		  loggerPromise.then(loggerReady => {
			  loggerReady.error("Tried to delete inexistant restaurant", restaurant);
		  })
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
