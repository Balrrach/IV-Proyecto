class Location {
	private coordinates: [number, number, number] = [0, 0, 0];

	constructor(coordinates: [number, number, number]) {
		this.coordinates = coordinates;
	}

	getCoordinates(): number[] {
		return this.coordinates;
	}
}


export { Location }

