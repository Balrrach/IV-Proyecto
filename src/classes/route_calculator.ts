import { DeliveryMan } from './delivery_man';
import { Restaurant, Location } from './location';
import { Order } from './order';
import { Route } from './route'


class RouteCalculator {
  private deliveryMen: DeliveryMan[] = [];


  constructor() {}


  addDeliveryMan(deliveryMan: DeliveryMan) {}
  removeDeliveryMan(delivery_man: DeliveryMan) {}

  addOrders(orders: Order[]) {
	  return this.recalculateRoutes();
  }

  private recalculateRoutes() {}
  private distance(loc1: Location, loc2: Location) {
	  let coor1 = loc1.getCoordinates();
	  let coor2 = loc2.getCoordinates();
	  let result = 0;

	  coor1.forEach((element, index) => {
		  result += (coor1[index] - coor2[index])**2;
	  })
	  return result;
  }
}


export { RouteCalculator };
