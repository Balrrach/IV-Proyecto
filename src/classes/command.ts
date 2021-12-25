import { Product } from './product'; 
import { Restaurant } from './restaurant'

enum State {
	preparing,
	ready,
	pickedUp,
}

class Command {
  private product: Product;
  private restaurant: Restaurant;
  private remainingTime: number;
  private state: State = State.preparing;

  constructor(product: Product, restaurant: Restaurant, remainingTime?: number) {
	  this.product = product;
	  this.restaurant = restaurant;
	  if(remainingTime == null)
		  this.remainingTime = product.getEstimatedRemainingTime() + restaurant.getDelay()
	  else
		  this.remainingTime = remainingTime;
  }

  productReady() {
	this.state = State.ready;
  }
  productPickup() {
	this.state = State.pickedUp;
  }
}


export { Command };
