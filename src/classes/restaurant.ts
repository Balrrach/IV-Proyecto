import { Location } from './location'
import { Product } from './product'; 
import { controller } from '../controller'
const loggerPromise = controller.Ready.then(() => {
	return controller.getLogger().child({ module: 'Restaurant'})
})


class Restaurant extends Location {
	private name: string = '';
	private products: Product[] = [];
	private delay: number = 0;

	private processName(name: string) {
		if(name.length > 0)
			this.name = name;
		else{
			loggerPromise.then(loggerReady => {
				loggerReady.error("Restaurants cant have an empty name")
			})
			throw new Error("Restaurants cant have an empty name")
		}
	}

	private processPoducts(products: Product[]) {
		if(products.length > 0)
			this.products = products;
		else{
			loggerPromise.then(loggerReady => {
				loggerReady.error("Restaurants need to have, at least, one associated product")
			})
			throw new Error("Restaurants need to have, at least, one associated product")
		}
	}

	constructor(coordinates: [number, number, number], name = '', products: Product[] = []) {
		super(coordinates);
		this.processName(name);
		this.processPoducts(products);

		loggerPromise.then(loggerReady => {
			loggerReady.info("Restaurant object correctly instantiated");
		})
	}

	getName(): string {
		return this.name;
	}

	getProducts(): Product[] {
		return this.products;
	}

	getDelay(): number {
		return this.delay;
	}

	setDelay(newDelay: number) {
		this.delay = newDelay;
	}

	deliveryManMessage(){}
}


export { Restaurant };
