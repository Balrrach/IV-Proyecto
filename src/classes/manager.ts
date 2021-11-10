import { Map } from './map';
import { Route } from './route';


class Manager {
  private map: Map = new Map();
  private route: Route = new Route();

  constructor() {}

  getMap(): Map {
	  return this.map;
  }

  getRoute(): Route {
	  return this.route;
  }
}


export { Manager }
