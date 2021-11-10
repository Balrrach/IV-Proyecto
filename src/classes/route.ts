import { Restaurant, Location } from './location';

class Route {
  private destinations: Location[] = [];


  constructor() {}

  getDestinations(): Location[] {
	  return this.destinations;
  }


  next(): Location {
    return new Location();
  }

  recalculate() {}
}


export { Route };
