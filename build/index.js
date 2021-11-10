"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var manager_1 = require("./classes/manager");
var delivery_man_1 = require("./classes/delivery_man");
var location_1 = require("./classes/location");
// Read locations
(0, location_1.loadLocations)();
// Instanciate agents
var manager = new manager_1.Manager;
var deliveryMan = new delivery_man_1.DeliveryMan('Jimmi');
