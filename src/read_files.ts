import { Restaurant } from './classes/location'; 
import { Product } from './classes/product'; 
import { readFileSync } from 'fs';
import { resolve } from 'path/posix';
import { rejects } from 'assert';


// function tryReadFile(fileName: string): string {
// 	try {
// 		return readFileSync(fileName, 'utf-8');
// 	} catch {
// 		throw new Error('File not found ' + fileName);
// 	}
// }
// 
// function tryParseJson(stringToParse: string) {
// 	try {
// 		return JSON.parse(stringToParse);
// 	} catch {
// 		throw new Error('Failed to parse string to json');
// 	}
// }


function tryReadFile(fileName: string): Promise<string> {
	return new Promise<string>((resolve, rejects) => {
		try {
			resolve(readFileSync(fileName, 'utf8'));
		} catch {
			rejects(Error('File not found ' + fileName));
		}
	})
}

function tryParseJson(stringToParse: string) {
	try {
		return JSON.parse(stringToParse);
	} catch {
		throw new Error('Failed to parse string to json');
	}
}

async function loadRestaurants(restaurantsFile: string): Promise<Restaurant[]> {
	let stringToParse = await tryReadFile(restaurantsFile);
	let jsonObjectArray = tryParseJson(stringToParse);

	let restaurants: Restaurant[] = []
	for(let restaurantIndex = 0; restaurantIndex < jsonObjectArray.length; restaurantIndex++){
		let currentRestaurant = jsonObjectArray[restaurantIndex];

		let products: Product[] = [];
		for (let productIndex = 0; productIndex < currentRestaurant['products'].length; productIndex++) {
			let currentProduct = currentRestaurant['products'][productIndex];
			products.push(new Product(currentProduct['name'], currentProduct['weight'], currentProduct['price']));
		}

		restaurants.push(new Restaurant(currentRestaurant['coordenates'], currentRestaurant['name'], products));
	}

	return restaurants;
	throw new Error('Failed to parse string to json');
}


export { tryReadFile, tryParseJson, loadRestaurants }

