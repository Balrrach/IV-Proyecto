import { Location } from './location';
import { Order } from './order'
import { Controller } from '../controller'

const logger = (Controller.getInstance()).getLogger().child({ module: 'Route'})


class Route {
	private route: Location[];
	private orders: Order[];

	constructor(route: Location[] = [], orders: Order[] = []) {
		this.route = route;
		this.orders = orders;

		logger.info("Route object correctly instantiated");
	}

	getDestinations(): Location[] {
		return this.route;
	}

	getOrders(): Order[] {
		return this.orders;
	}


	getNextDestination(): Location {
		return this.route[0];
	}

	update() {}
}


export { Route };
