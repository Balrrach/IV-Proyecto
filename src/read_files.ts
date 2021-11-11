import { Restaurant } from './classes/location'; 
import { Product } from './classes/product'; 
import { readFileSync } from 'fs';
import { match } from 'assert';


function tryReadFile(fileName: string): string {
	try {
		return readFileSync(fileName, 'utf-8');
	} catch {
		throw new Error('File not found ' + fileName);
	}
}

function tryParseJson(stringToParse: string) {
	try {
		return JSON.parse(stringToParse);
	} catch {
		throw new Error('Failed to parse string to json');
	}
}


function loadRestaurants(restaurantsFile: string): Restaurant[] {
	let stringToParse = tryReadFile(restaurantsFile);
	let jsonObjectArray = tryParseJson(stringToParse);

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
	return restaurants;
}


export { tryReadFile, tryParseJson, loadRestaurants }

