import { Location } from './location';
import { Restaurant } from './restaurant';
import { Product } from './product';


class Order {
  private static last_ID_generated: number = 0;

  private ID: number = 0;
  private destiny: Location;
  private origin: [ID: number, Restaurant:Location][];
  private items: number[] = [];


  private generate_new_ID(): number {
    Order.last_ID_generated++;
    return Order.last_ID_generated;
  }

  constructor(origin: [ID: number, Restaurant:Location][], destiny: Location, items: number[]) {
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

  getOrigin(): [ID: number, Restaurant:Location][] {
	  return this.origin;
  }

  getItems(): number[] {
	  return this.items;
  }
}


export { Order };
