import { Location } from './location';
import { Restaurant } from './restaurant';
import { Order } from './order'


class Route {
  private destinations: Location[] = [];
  private orders: Order[] = [];

  constructor(destinations: Location[] = [], orders: Order[] = []) {
	  this.destinations = destinations;
	  this.orders = orders;
  }

  getDestinations(): Location[] {
	  return this.destinations;
  }

  getOrders(): Order[] {
	  return this.orders;
  }


  getNextDestination(): Location {
	return this.destinations[0];
  }

  update() {}
}


export { Route };
