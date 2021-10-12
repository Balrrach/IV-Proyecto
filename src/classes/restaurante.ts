import { Vector } from 'ts-matrix';
import { Pedido } from './pedido';

class Restaurante {
  ID = 0;
  nombre = '';

  coordenadas: Vector = new Vector([0, 0]);

  pedidos_por_recoger: Pedido[] = [];

  constructor(nombre = '', coords: Vector = new Vector([0, 0])) {
    // Asegurarse de que el vector es de longitud 0.
  }

  recibir(pedido: Pedido) {}
}

export { Restaurante };
