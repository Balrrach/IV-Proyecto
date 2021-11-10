import { Order } from './order';


class DeliveryMan {
  nombre = '';
  peso_maximo = 100;

  current_orders: Order[] = [];


  constructor(name: string) {}


  add_order(order: Order) {}
}


export { DeliveryMan };
