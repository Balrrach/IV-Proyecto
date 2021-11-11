import { Order } from './order'; 
import { Product } from './product'; 


class Location {
  private coordenates: number[] = [];


  constructor(coordenates: number[] = [0, 0, 0]) {
    this.coordenates = coordenates
  }

  getCoordenates(): number[] {
	  return this.coordenates;
  }
}


class Restaurant extends Location {
  private name: String = '';
  private products: Product[] = []

  private orders_ready: number[] = [];


  constructor(name = '', coords: number[] = [0, 0, 0], products: Product[] = []) {
    super(coords);
    this.name = name;
    this.products = products;
  }

  getName(): String {
	  return this.name;
  }

  getProducts(): Product[] {
	  return this.products;
  }

  getOrdersReady(): number[] {
	return this.orders_ready;
  }


  recieve(order: number) {}
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

