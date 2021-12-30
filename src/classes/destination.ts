import { Location } from './location'
import { Controller } from '../controller'

const logger = (Controller.getInstance()).getLogger().child({ module: 'Destination'})


class Destination extends Location {
	private street: string = '';
	private number: number = 0;
	private step: number = 0;
	private letter: string = '';
	private customerName: string = '';

	constructor(coordinates: [number, number, number] = [0, 0, 0], street: string, number: number, step: number, letter: string, customerName: string){
		super(coordinates);
		this.street = street;
		this.number = number;
		this.step = step;
		this.letter = letter;
		this.customerName = customerName;

		logger.info("Destination object correctly instantiated");
	}

	deliveryManMessage(){}
}


export { Destination }
