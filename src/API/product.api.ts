import { Controller } from "../controller";
import Hapi from '@hapi/hapi';
import { pino } from 'pino';
import * as product from '../handlers/product.handler'


const logger: pino.Logger = Controller.getInstance().getLogger();
const server: Hapi.Server = Controller.getInstance().getServer();


server.route({
	method: 'GET',
	path: '/product',
	handler: function(request, h) { product.getAllProducts(request, h) }
});

server.route({
	method: 'GET',
	path: '/product/{id}',
	handler: function(request, h) { product.getProductByID(request, h) }
});

server.route({
	method: 'PUT',
	path: '/product',
	handler: function(request, h) { product.createProduct(request, h) }
});

server.route({
	method: 'POST',
	path: '/product',
	handler: function(request, h) { product.updateProduct(request, h) }
});

server.route({
	method: 'DELETE',
	path: '/product/{id}',
	handler: function(request, h) { product.deleteProductByID(request, h) }
});

