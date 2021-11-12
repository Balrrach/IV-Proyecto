import { DeliveryMan } from './delivery_man';
import { Restaurant, Location } from './location';
import { Order } from './order';
import { Route } from './route'


class RouteCalculator {
  private deliveryMen: DeliveryMan[] = [];

  constructor() {}


  addDeliveryMan(deliveryMan: DeliveryMan) {}
  removeDeliveryMan(delivery_man: DeliveryMan) {}

  addOrder(order: Order) {
	  return this.recalculateRoutes();
  }

  private recalculateRoutes() {}
  private distance(loc1: Location, loc2: Location) {}
}


export { RouteCalculator };
