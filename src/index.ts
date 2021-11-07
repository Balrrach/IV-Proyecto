import * as fs from 'fs';
import{ Gestor } from './classes/gestor';
import{ Repartidor } from './classes/repartidor';

console.log('Hello world!');

// Read locations
function readLocations() {
	fs.readFileSync('data/locations.txt','utf8');
}

readLocations()
var gestor = new Gestor
var repartidor = new Repartidor('Jimmi')
