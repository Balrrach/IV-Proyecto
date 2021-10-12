import { Restaurante } from './restaurante';

class Ruta {
  destinos: Restaurante[] = [];

  constructor() {}

  siguiente(): Restaurante {
    // FIXME temporal
    return new Restaurante();
  }

  recalcular() {}
}

export { Ruta };
