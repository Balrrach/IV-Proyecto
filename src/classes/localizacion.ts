import { Vector } from 'ts-matrix';
import { Pedido } from './pedido';


class Localizacion {
  coordenadas: Vector = new Vector([0, 0]);

  constructor(coords: Vector = new Vector([0, 0])) {
    // Asegurarse de que el vector es de longitud 0.
    this.coordenadas = coords
  }

  recibir(pedido: Pedido) {}
}


class Restaurante extends Localizacion {
  nombre: String = '';

  pedidos_por_recoger: Pedido[] = [];

  constructor(nombre = '', coords: Vector = new Vector([0, 0])) {
    super(coords)
  }

  preparar_pedido()  {}
  entregar_pedido(): Pedido {
    return new Pedido(this, new Localizacion())
  }
}

export { Restaurante, Localizacion };
