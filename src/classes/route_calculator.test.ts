import { expect } from 'chai'
var rewire = require('rewire'),
import { RouteCalculator } from '../classes/route_calculator'
import { Location } from './location'


let routeCalculator = new RouteCalculator()
let location1 = new Location([0, 0, 0])
let location2 = new Location([1, 0, 0])
let location3 = new Location([2, 0, 0])
let a = routeCalculator.distance(location1, location2)
it('Distance to the same location is 0', () => {
	expect(a).to.equal(2);
})
