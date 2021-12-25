import { Location } from './location';
import { Restaurant } from './restaurant';
import { Command } from './command';


class Order {
  private static last_ID_generated: number = 0;

  private ID: number = 0;
  private destiny: Location;
  private commands: Command[];


  private generate_new_ID(): number {
    Order.last_ID_generated++;
    return Order.last_ID_generated;
  }

  constructor(commands: Command[], destiny: Location) {
	  this.generate_new_ID();
	  this.commands = commands;
	  this.destiny = destiny;
  }


  getID(): number {
	  return this.ID;
  }

  getDestiny(): Location {
	  return this.destiny;
  }

  getCommands(): Command[] {
	  return this.commands;
  }
}


export { Order };
