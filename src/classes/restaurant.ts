import { Location } from './location'
import { Product } from './product'; 


class Restaurant extends Location {
  private name: string = '';
  private products: Product[] = [];
  private delay: number = 0;

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

  getDelay(): number {
	return this.delay;
  }

  setDelay(newDelay: number) {
	this.delay = newDelay;
  }

  deliveryManMessage(){}
}


export { Restaurant };
