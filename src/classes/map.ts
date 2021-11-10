import { Restaurant, Location } from './location';


class Map {
  private locations: Location[] = [];
  private distanceMatrix:  number[][] = [];


  constructor() {}

  getLocations(): Location[] {
	  return this.locations;
  }

  getDistanceMatrix(): number[][] {
	  return this.distanceMatrix;
  }


  add_location(location: Location) {}

  build_distance_matrix() {}

  distance(loc1: Location, loc2: Location) {}
}


export { Map };
