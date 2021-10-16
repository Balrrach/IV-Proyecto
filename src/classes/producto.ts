class Producto {
  private static last_ID_generated: number = 1

  ID: number = 0;
  nombre: String = '';
  peso: number = 0;

  private generate_new_ID(): number {
    Producto.last_ID_generated++
    return Producto.last_ID_generated
  }

  constructor(nombre: string, peso: number) {}
}

export { Producto };
