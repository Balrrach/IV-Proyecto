import { DeliveryMan } from './delivery_man';
import { Restaurant, Location } from './location';
import { Order } from './order';
import { Route } from './route'


class RouteCalculator {
  private allOrders: Order[] = [];
  private ordersAssigenedToDeliveryMan: [DeliveryMan,[Order]][] = [];

  constructor() {}


  addDeliveryMan(deliveryMan: DeliveryMan) {}
  removeDeliveryMan(delivery_man: DeliveryMan) {}

  addOrder(order: Order): [DeliveryMan, Route] {
	  this.allOrders.push(order);
	  return this.assignOrderToDeliveryMan(order);
  }

  private distance(loc1: Location, loc2: Location) {}
  private assignOrderToDeliveryMan(order: Order): [DeliveryMan, Route] {
	  return [new DeliveryMan('tommy', 500), new Route()];
  }
}


export { RouteCalculator };
