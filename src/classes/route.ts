import { Location } from './location';
import { Order } from './order'


class Route {
	private route: Location[];
	private orders: Order[];

	constructor(route: Location[] = [], orders: Order[] = []) {
		this.route = route;
		this.orders = orders;
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
