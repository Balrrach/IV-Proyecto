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



import { match } from 'assert';
import { readFileSync } from 'fs';
import { consumers } from 'stream';

function loadLocations() {
	loadRestaurants();
}

function loadRestaurants() {

	// Read with exceptions
	// fs.readFile('./data/restaurants.json', 'utf8', (err: Error, contents: string) => {
	// 	if (err) {
	// 		console.error(err);
	// 		return;
	// 	}
	// 	
	// 	try {
	// 		const jsonObjectArray = JSON.parse(contents);
	// 		console.log(jsonObjectArray);
	// 	} catch (jsonError) {
	// 		console.error('Error parsing JSON');
	// 	}
	// });
	// console.log(jsonObjectArray);


	// Foreach try
	// const json = readFileSync('./data/restaurants.json', 'utf-8');
	// let jsonObjectArray = JSON.parse(json)
	// let restaurants: Restaurant[] = [];
	// let algo = jsonObjectArray.restaurants
	// console.log(typeof algo)
	// jsonObjectArray.restaurants.forEach((restaurant: undefined)=> {
		// console.log(typeof restaurant)
// 		let products: Product[] = [];
// 		restaurant.products.forEach((product: undefined) => {
// 			products.push(new Product(product.name, product.weight, product.price));
// 		});
// 
// 		restaurants.push(new Restaurant(restaurant.name, restaurant.coordenates, products));
	// });


	// For ... in try
// 	for(let restaurant in data.restaurants) {
// 
// 		let products: Product[] = [];
// 		for(let product in restaurant[products]) {
// 			products.push(new Product(product.name, product.weight, product.price));
// 		};
// 
// 		restaurants.push(new Restaurant(restaurant.name, restaurant.coordenates, products));
// 	};
// }

// 	const json = readFileSync('./data/restaurants.json', 'utf-8');
// 	let jsonObjectArray = JSON.parse(json)
// 
// 	let restaurants: Restaurant[] = []
// 	// for(let restaurantIndex = 0; restaurantIndex < jsonObjectArray.length; restaurantIndex++){
// 	for(let currentRestaurant in jsonObjectArray){
// 		// let currentRestaurant = jsonObjectArray[restaurantIndex];
// 		let mires = jsonObjectArray[0];
// 		console.log(typeof jsonObjectArray)
// 		console.log(typeof mires)
// 		console.log(typeof currentRestaurant)
// 
// 		let products = jsonObjectArray.map((object: Product) => object['products'] )
// 		// let products: Product[] = [];
// 		// for (let productIndex = 0; productIndex < currentRestaurant['products'].length; productIndex++) {
// 		// 	let currentProduct = currentRestaurant['products'][productIndex];
// 		// 	products.push(new Product(currentProduct['name'], currentProduct['weight'], currentProduct['price']));
// 		// }
// 
// 		restaurants.push(new Restaurant(currentRestaurant['name'], currentRestaurant['coordenates'], products));
// 	}
// 
// 	console.log(restaurants)

// 	Final result
	const json = readFileSync('./data/restaurants.json', 'utf-8');
	let jsonObjectArray = JSON.parse(json)

	let restaurants: Restaurant[] = []
	for(let restaurantIndex = 0; restaurantIndex < jsonObjectArray.length; restaurantIndex++){
		let currentRestaurant = jsonObjectArray[restaurantIndex];

		let products: Product[] = [];
		for (let productIndex = 0; productIndex < currentRestaurant['products'].length; productIndex++) {
			let currentProduct = currentRestaurant['products'][productIndex];
			products.push(new Product(currentProduct['name'], currentProduct['weight'], currentProduct['price']));
		}

		restaurants.push(new Restaurant(currentRestaurant['name'], currentRestaurant['coordenates'], products));
	}

	console.log(restaurants)
}


export { loadLocations }
