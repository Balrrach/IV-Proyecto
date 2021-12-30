import { Location } from './location'
import { Product } from './product'; 
import { Controller } from '../controller'

const logger = (Controller.getInstance()).getLogger().child({ module: 'Restaurant'})


class Restaurant extends Location {
	private name: string = '';
	private products: Product[] = [];
	private delay: number = 0;

	private processName(name: string) {
		if(name.length > 0)
			this.name = name;
		else{
			logger.error("Restaurants cant have an empty name")
			throw new Error("Restaurants cant have an empty name")
		}
	}

	private processPoducts(products: Product[]) {
		if(products.length > 0)
			this.products = products;
		else{
			logger.error("Restaurants need to have, at least, one associated product")
			throw new Error("Restaurants need to have, at least, one associated product")
		}
	}

	constructor(coordinates: [number, number, number], name = '', products: Product[] = []) {
		super(coordinates);
		this.processName(name);
		this.processPoducts(products);

		logger.info("Restaurant object correctly instantiated");
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
