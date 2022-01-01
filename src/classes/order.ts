import { Destination } from './destination';
import { Command } from './command';


class Order {
	private static last_ID_generated: number = 0;

	private ID: number = 0;
	private destination: Destination;
	private commands: Command[];


	private generate_new_ID(): number {
		Order.last_ID_generated++;
		return Order.last_ID_generated;
	}

	constructor(commands: Command[], destination: Destination) {
		this.generate_new_ID();
		this.commands = commands;
		this.destination = destination;
	}


	getID(): number {
		return this.ID;
	}

	getDestiny(): Destination {
		return this.destination;
	}

	getCommands(): Command[] {
		return this.commands;
	}
}


export { Order };
