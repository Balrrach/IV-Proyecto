import { expect } from 'chai'
import rewire from "rewire";
const rewiredModule = rewire("../src/classes/route_calculator");
const rewiredRouteCalculator = rewiredModule.__get__("RouteCalculator")
import { Location } from '../src/classes/location'


const myinstance = new rewiredRouteCalculator()
let location1 = new Location([0, 0, 0])
let location2 = new Location([1, 0, 0])
let location3 = new Location([2, 0, 0])


it('Distance to the same location is 0', () => {
	expect(myinstance.distance(location1, location1)).to.equal(0);
})

it('Distance to a further location is greater than to a closer one', () => {
	expect(myinstance.distance(location1, location3)).to.be.greaterThan(myinstance.distance(location1, location2));
})
