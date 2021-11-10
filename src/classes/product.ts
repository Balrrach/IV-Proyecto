class Product {
  private static last_ID_generated: number = 1

  private ID: number = 0;
  private name: String = '';
  private weight: number = 0;
  private price: number = 0;


  private generate_new_ID(): number {
    Product.last_ID_generated++;
    return Product.last_ID_generated;
  }

  constructor(name: string, weight: number, price: number) {
	  this.ID = this.generate_new_ID()
	  this.name = name;
	  this.weight = weight;
	  this.price = price;
  }

  getID(): number {
	  return this.ID;
  }

  getName(): String {
	  return this.name;
  }

  getWeight(): number {
	  return this.weight;
  }

  getPrice(): number {
	  return this.price;
  }
}

export { Product };
