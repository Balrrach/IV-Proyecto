import { Restaurante, Localizacion } from './localizacion';
import { Producto } from './producto';

class Pedido {
  ID = 0;

  destino: Localizacion = new Localizacion();
  origen: Restaurante = new Restaurante();

  productos_asociados: Producto[] = [];

  constructor(origen: Restaurante, destino: Localizacion) {}
}

export { Pedido };
