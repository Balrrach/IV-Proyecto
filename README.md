# IV-Proyecto
Proyecto dedicado a la resolución del "Problema del Repatidor" para la asignatura de Infraestructura Virtual. El problema consiste en dado un repartidor, una lista de puntos de recogida(restaurantes/tiendas) y otra de puntos de entrega determinar cual es el camino óptimo respecto a la distancia para la entrega de los pedidos realizados por los clientes.

Las restricciones son las siguientes:
1. No se puede entregar un entregar un producto sin antes haberlo recogido.
2. Se deben completar todos los pedidos.

Restricciones extra(se implementarán o no en función del tiempo del que se disponga):
1. La capacidad de carga del repartidor es limitada(respecto al peso, las dimensiones o una combinación de ambas).
2. El repartidor tiene un depósito limitado


### Documentación técnica

Se ha intentado seguir las mejores prácticas de desarrollo modernas. Se ha configurado para que VSCode formatee el código al guardar, usando `Prettier` y `ESLint`

- Los siguientes tutoriales se han usado para poner en marcha el proyecto:
  - [TS](https://khalilstemmler.com/blogs/typescript/node-starter-project/)
  - [Linter](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)
- Comandos:
  - Para correr la aplicación en el ambiente dev (cold reloading): `npm run start:dev`.
  - Para crear una build de producción: `npm run build`
  - Para correr la aplicación en producción: `npm run start`
  - Para buscar fallos de escritura: `npm run lint`
    - Para arregarlos: `npm run prettier-format`