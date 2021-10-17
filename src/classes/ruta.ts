import { Restaurante, Localizacion } from './localizacion';

class Ruta {
  destinos: Localizacion[] = [];

  constructor() {}

  siguiente(): Localizacion {
    // FIXME temporal
    return new Restaurante();
  }

  recalcular() {}
}

export { Ruta };
