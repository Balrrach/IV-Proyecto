import { Pedido } from './pedido';

class Repartidor {
  nombre = '';
  peso_maximo = 100;

  pedidos_actuales: Pedido[] = [];

  constructor(nombre: string) {}

  anadir_pedido(nuevo: Pedido) {}
}

export { Repartidor };
