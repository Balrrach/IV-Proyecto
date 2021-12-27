import { controller } from '../controller'
const loggerPromise = controller.Ready.then(() => {
	return controller.getLogger().child({ module: 'Location'})
})


class Location {
	private coordinates: [number, number, number] = [0, 0, 0];

	constructor(coordinates: [number, number, number]) {
		this.coordinates = coordinates;

		loggerPromise.then(loggerReady => {
			loggerReady.info("Location object correctly instantiated");
		})
	}


	getCoordinates(): number[] {
		return this.coordinates;
	}
}


export { Location }

