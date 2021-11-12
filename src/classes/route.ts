import { Restaurant, Location } from './location';
import { Order } from './order'


class Route {
  private destinations: Location[] = [];
  private orders: Order[] = [];

  constructor() {}


  getDestinations(): Location[] {
	  return this.destinations;
  }


  next(): Location {
	return this.destinations[0];
  }

  update() {}
}


export { Route };
