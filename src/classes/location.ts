import { Order } from './order'; 
import { Product } from './product'; 


class Location {
  private coordinates: [number, number, number] = [0, 0, 0];

  constructor(coordinates: [number, number, number]) {
	  this.coordinates = coordinates;
  }

  getCoordinates(): number[] {
	  return this.coordinates;
  }
}


class Restaurant extends Location {
  private name: string = '';
  private products: Product[] = []
  private orders_ready: number[] = [];

  private processName(name: string) {
	  if(name.length > 0)
		  this.name = name;
	  else
		throw new Error('Restaurants cant have an empty name')
  }

  private processPoducts(products: Product[]) {
	  if(products.length > 0)
		  this.products = products;
	  else
		  throw new Error('Restaurants need to have, at least, one associated product')
  }

  constructor(coordinates: [number, number, number], name = '', products: Product[] = []) {
    super(coordinates);
    this.processName(name);
    this.processPoducts(products);
  }

  getName(): string {
	  return this.name;
  }

  getProducts(): Product[] {
	  return this.products;
  }

  getOrdersReady(): number[] {
	return this.orders_ready;
  }


  receive(order: number) {}
  prepare_order()  {}
  hand_order(id: number): boolean {
	this.orders_ready.forEach( (order) => {
		if(order == id) {
			this.orders_ready = this.orders_ready.filter((or) => {or != id});
			return true;
		}
	})
	return false;
  }
}


export { Restaurant, Location };

