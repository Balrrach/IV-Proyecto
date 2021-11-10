import { Restaurant, Location } from './location';
import { Product } from './product';


class Order {
  private static last_ID_generated: number = 1

  private ID: number = 0;
  private destiny: Location = new Location();
  private origin: Restaurant = new Restaurant();
  private items: number[] = [];


  private generate_new_ID(): number {
    Order.last_ID_generated++;
    return Order.last_ID_generated;
  }

  constructor(origin: Restaurant, destiny: Location, items: number[]) {
	  this.generate_new_ID();
	  this.origin = origin;
	  this.destiny = destiny;
	  this.items = items;
  }


  getID(): number {
	  return this.ID;
  }

  getDestiny(): Location {
	  return this.destiny;
  }

  getOrigin(): Restaurant {
	  return this.origin;
  }

  getItems(): number[] {
	  return this.items;
  }
}


export { Order };
