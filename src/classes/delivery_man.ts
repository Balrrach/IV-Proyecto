import { Order } from './order';
import { Route } from './route';


class DeliveryMan {
  private static last_ID_generated: number = 0

  private ID: number = 0;
  private name: string = '';
  private maximumWeight: number = 100;
  private coordenates: number[] = [];
  private route: Route = new Route()

  private generate_new_ID(): number {
    DeliveryMan.last_ID_generated++;
    return DeliveryMan.last_ID_generated;
  }

  constructor(name: string, maximumWeight: number = 15000, coordenates: number[]) {}
  

  updateRoute(route: Route) {
	  this.route = route;
	  this.notify();
  }
  notify() {}
}


export { DeliveryMan };
