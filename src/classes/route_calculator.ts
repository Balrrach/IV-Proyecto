import { DeliveryMan } from './delivery_man';
import { Location } from './location';
import { Restaurant } from './restaurant';
import { Order } from './order';
import { Route } from './route'
import { Controller } from '../controller'

const logger = (Controller.getInstance()).getLogger().child({ module: 'RouteCalculator'})


class RouteCalculator {
	private deliveryMen: DeliveryMan[] = [];


	constructor() {
		logger.info("Object correctly instantiated");
	}


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

		// logger.info("Distance between " + coor1 + " and " + co)
		return result;
	}
}


export { RouteCalculator };
