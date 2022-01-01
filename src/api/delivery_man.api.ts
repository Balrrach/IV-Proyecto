import { Controller } from "../controller";
import Hapi from '@hapi/hapi';
import { pino } from 'pino';
import * as deliveryMan from '../handlers/delivery_man.handler'


const logger: pino.Logger = Controller.getInstance().getLogger();
const server: Hapi.Server = Controller.getInstance().getServer();


server.route({
	method: 'POST',
	path: '/deliveryMan',
	handler: function(request, h) { deliveryMan.createDeliveryMan(request, h) }
});

server.route({
	method: 'PUT',
	path: '/deliveryMan',
	handler: function(request, h) { deliveryMan.updateDeliveryMan(request, h) }
});

server.route({
	method: 'DELETE',
	path: '/deliveryMan/{id}',
	handler: function(request, h) { deliveryMan.deleteDeliveryManByID(request, h) }
});

