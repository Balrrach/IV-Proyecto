import { Location } from './location';
import { Order } from './order'
import { controller } from '../controller'
const loggerPromise = controller.Ready.then(() => {
	return controller.getLogger().child({ module: 'Route'})
})


class Route {
	private route: Location[];
	private orders: Order[];

	constructor(route: Location[] = [], orders: Order[] = []) {
		this.route = route;
		this.orders = orders;

		loggerPromise.then(loggerReady => {
			loggerReady.info("Route object correctly instantiated");
		})
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
