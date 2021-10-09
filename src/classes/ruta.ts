import { Restaurante } from './restaurante';

class Ruta {
  destinos: Restaurante[] = [];

  constructor() {}

  siguiente(): Restaurante {
    // FIXME temporal
    return new Restaurante();
  }
}

export { Ruta };
