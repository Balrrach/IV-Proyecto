import { Controller } from '../controller'

const logger = (Controller.getInstance()).getLogger().child({ module: 'Product'})


class Product {
	private static last_ID_generated: number = 0;

	private ID: number = 0;
	private name: String = '';
	private weight: number = 0;
	private price: number = 0;
	private estimatedRemainingTime: number = 0;


	private generate_new_ID(): number {
		Product.last_ID_generated++;
		return Product.last_ID_generated;
	}

	private processID(ID: number) {
		if(ID > 0)
			this.ID = ID;
		else{
			logger.error("ID has to be strictly positive")
			throw new Error("ID has to be strictly positive");
		}
	}

	private processName(name: string) {
		if(name.length > 0)
			this.name = name;
		else{
			logger.error("Name can't be empty")
			throw new Error("Name can't be empty");
		}
	}

	private processWeight(weight: number) {
		if(weight > 0)
			this.weight = weight;
		else{
			logger.error("Weight has to be strictly positive")
			throw new Error("Weight has to be strictly positive");
		}
	}


	private processPrice(price: number) {
		if(price > 0)
			this.price = price;
		else{
			logger.error("Price has to be strictly positive")
			throw new Error("Price has to be strictly positive");
		}
	}

	private processEstimatedRemaningTime(estimatedRemainingTime: number) {
		if(estimatedRemainingTime> 0)
			this.estimatedRemainingTime= estimatedRemainingTime;
		else{
			logger.error("Estimated remaining time has to be strictly positive")
			throw new Error("Estimated remaining time has to be strictly positive");
		}
	}

	constructor(name: string, weight: number, price: number, estimatedRemainingTime: number) {
		this.processID(this.generate_new_ID());
		this.processName(name);
		this.processWeight(weight);
		this.processPrice(price);
		this.processEstimatedRemaningTime(estimatedRemainingTime);
	}

	getID(): number {
		return this.ID;
	}

	getName(): String {
		return this.name;
	}

	getWeight(): number {
		return this.weight;
	}

	getPrice(): number {
		return this.price;
	}

	getEstimatedRemainingTime(): number {
		return this.estimatedRemainingTime;
	}
}

export { Product };
