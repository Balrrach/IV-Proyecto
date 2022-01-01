import { Controller } from "../controller";
import Hapi from '@hapi/hapi';
import { pino } from 'pino';
import * as restaurant from '../handlers/restaurant.handler'


const logger: pino.Logger = Controller.getInstance().getLogger();
const server: Hapi.Server = Controller.getInstance().getServer();


server.route({
	method: 'GET',
	path: '/restaurant',
	handler: function(request, h) { restaurant.getAllRestaurants(request, h) }
});

server.route({
	method: 'GET',
	path: '/restaurant/{id}',
	handler: function(request, h) { restaurant.getRestaurantByID(request, h) }
});

server.route({
	method: 'POST',
	path: '/restaurant',
	handler: function(request, h) { restaurant.createRestaurant(request, h) }
});

server.route({
	method: 'PUT',
	path: '/restaurant',
	handler: function(request, h) { restaurant.updateRestaurant(request, h) }
});

server.route({
	method: 'DELETE',
	path: '/restaurant/{id}',
	handler: function(request, h) { restaurant.deleteRestaurantByID(request, h) }
});

