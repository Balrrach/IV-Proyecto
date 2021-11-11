"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var manager_1 = require("./classes/manager");
var delivery_man_1 = require("./classes/delivery_man");
var read_files_1 = require("./read_files");
// Read locations
(0, read_files_1.loadLocations)();
// Instanciate agents
var manager = new manager_1.Manager;
var deliveryMan = new delivery_man_1.DeliveryMan('Jimmi');
