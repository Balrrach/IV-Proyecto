import { Order } from './order';
import { Route } from './route';


class DeliveryMan {
  private static last_ID_generated: number = 0

  private ID: number = 0;
  private name: string = '';
  private maximumWeight: number = 100;
  private route: Route = new Route()
  private orders: Order[] = []

  private generate_new_ID(): number {
    DeliveryMan.last_ID_generated++;
    return DeliveryMan.last_ID_generated;
  }

  constructor(name: string, maximumWeight: number = 15000) {}
  

  addOrder(order: Order) {}
  removeOrder(order: Order) {}
  updateRoute(route: Route) {
	  this.route = route;
	  this.notify();
  }
  notify() {}
}


export { DeliveryMan };
