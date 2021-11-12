import { RouteCalculator } from './route_calculator';
import { Restaurant } from './location';
import { Order } from './order';
import { Route } from './route';
import { DeliveryMan } from './delivery_man';


class Manager {
  private routeCalculator: RouteCalculator = new RouteCalculator();
  private restaurants: Restaurant[] = []


  constructor(restaurants: Restaurant[] = []) {
	  this.restaurants = restaurants;
  }


  addRestaurant(restaurant: Restaurant) {
	  this.restaurants.push(restaurant);
  }

  removeRestaurant(restaurant: Restaurant) {
	  let index = this.restaurants.indexOf(restaurant);
	  if( index >= 0) {
		  this.restaurants.splice(index, 1);
	  }
	  else
		  throw new Error('Tried to delete inexistant restaurant');
  }

  listRestaurants() {
	  console.log(this.restaurants);
  }


  addDeliveryMan(deliveryMan: DeliveryMan) {
	  this.routeCalculator.addDeliveryMan(deliveryMan);
  }

  removeDeliveryMan(deliveryMan: DeliveryMan) {
	  this.routeCalculator.removeDeliveryMan(deliveryMan);
  }

  deliveryManPicksUpProduct(productID: number) {}


  addOrder(order: Order) {
	  let data: [DeliveryMan, Route] = this.routeCalculator.addOrder(order);
	  this.updateDeliveryManRoute(data);
  }

  updateDeliveryManRoute(data: [DeliveryMan, Route]) {
	  data[0].updateRoute(data[1]);
  }
}


export { Manager }
