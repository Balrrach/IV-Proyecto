import { Matrix } from 'ts-matrix';
import { Restaurante, Localizacion } from './localizacion';

class Mapa {
  localizaciones: Localizacion[] = [];
  matriz_de_distancias: Matrix = new Matrix(0, 0);

  constructor() {}

  anadir_restaurante(nuevo_restaurante: Restaurante) {}

  construir_matrix_distancias() {}

  distancia(res1: Restaurante, res2: Restaurante) {}
}

export { Mapa };
