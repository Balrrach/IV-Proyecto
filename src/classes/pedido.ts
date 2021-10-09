import { Restaurante } from './restaurante';
import { Producto } from './producto';

class Pedido {
  ID = 0;

  destino: Restaurante = new Restaurante();
  origen: Restaurante = new Restaurante();

  productos_asociados: Producto[] = [];

  constructor(destino: Restaurante, origen: Restaurante) {}
}

export { Pedido };
