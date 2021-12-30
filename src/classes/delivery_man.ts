import { Order } from './order';
import { Route } from './route';
import { Controller } from '../controller'

const logger = (Controller.getInstance()).getLogger().child({ module: 'DeliveryMan'})


class DeliveryMan {
	private static last_ID_generated: number = 0;

	private ID: number = 0;
	private name: string = '';
	private maximumWeight: number;
	private coordinates: [number, number, number];
	private route: Route = new Route();

	private generate_new_ID(): number {
		DeliveryMan.last_ID_generated++;
		return DeliveryMan.last_ID_generated;
	}

	private processName(name: string) {
		if(name.length > 0)
			this.name = name;
		else{
			logger.error("Name can't be empty");
			throw new Error("Name can't be empty");
		}
	}

	constructor(name: string, coordinates: [number, number, number], maximumWeight: number = 15000) {
		this.generate_new_ID();
		this.processName(name);
		this.coordinates = coordinates;
		this.maximumWeight = maximumWeight;

		logger.info("DeliveryMan object correctly instantiated");
	}


	updateRoute(route: Route) {
		this.route = route;
		this.notify();
	}
	notify() {}
}


export { DeliveryMan };
