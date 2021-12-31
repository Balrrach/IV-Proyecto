import { Controller } from "../controller";
import Hapi from '@hapi/hapi';
import { pino } from 'pino';
import * as order from '../handlers/order.handler'


const logger: pino.Logger = Controller.getInstance().getLogger();
const server: Hapi.Server = Controller.getInstance().getServer();


server.route({
	method: 'GET',
	path: '/order',
	handler: function(request, h) { order.getOrderByID(request, h) }
});

server.route({
	method: 'POST',
	path: '/order',
	handler: function(request, h) { order.createOrder(request, h) }
});

