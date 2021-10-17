import { Restaurante, Localizacion } from './localizacion';
import { Producto } from './producto';

class Pedido {
  private static last_ID_generated: number = 1

  ID: number = 0;

  destino: Localizacion = new Localizacion();
  origen: Restaurante = new Restaurante();

  productos_asociados: Producto[] = [];

  private generate_new_ID(): number {
    Pedido.last_ID_generated++
    return Pedido.last_ID_generated
  }

  constructor(origen: Restaurante, destino: Localizacion) {}
}

export { Pedido };
