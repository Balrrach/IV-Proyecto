import { Controller } from '../controller'

const logger = (Controller.getInstance()).getLogger().child({ module: 'Location'})


class Location {
	private coordinates: [number, number, number] = [0, 0, 0];

	constructor(coordinates: [number, number, number]) {
		this.coordinates = coordinates;

		logger.info("Location object correctly instantiated");
	}


	getCoordinates(): number[] {
		return this.coordinates;
	}
}


export { Location }

