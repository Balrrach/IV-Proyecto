import { Product } from './product'; 
import { Restaurant } from './restaurant'
import { controller } from '../controller'
const loggerPromise = controller.getLogger().then((baseLogger) => {
	 return baseLogger.child({ module: 'Command'})
})


enum State {
	preparing,
	ready,
	pickedUp,
}

class Command {
	private static last_ID_generated: number = 0

	private ID: number;
	private product: Product;
	private restaurant: Restaurant;
	private remainingTime: number;
	private state: State = State.preparing;

	private generate_new_ID(): number {
		Command.last_ID_generated++;
		return Command.last_ID_generated;
	}

	constructor(product: Product, restaurant: Restaurant, remainingTime?: number) {
		this.ID = this.generate_new_ID();
		this.product = product;
		this.restaurant = restaurant;
		if(remainingTime == null)
			this.remainingTime = product.getEstimatedRemainingTime() + restaurant.getDelay();
		else
			this.remainingTime = remainingTime;

		loggerPromise.then(loggerReady => {
			loggerReady.info("Command object correctly instantiated")
		})
	}


	productReady() {
		this.state = State.ready;
	}
	productPickup() {
		this.state = State.pickedUp;
	}
}


export { Command };
