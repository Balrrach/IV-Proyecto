# IV-Proyecto

### Descripcion del Proyecto
Proyecto dedicado a la resolución del "Problema del Repartidor" para la asignatura de Infraestructura Virtual. El problema consiste en dado un repartidor, una lista de puntos de recogida(restaurantes/tiendas) y otra de puntos de entrega determinar cual es el camino óptimo respecto a la distancia para la entrega de los pedidos realizados por los clientes.

Las restricciones son las siguientes:
1. No se puede entregar un producto sin antes haberlo recogido.
2. Se deben completar todos los pedidos.


### Documentacion
Para consultar la documentacion del proyecto visite el siguiente enlace: [docs](./docs).


### Taks
Las tareas programadas son las siguientes:
 - npm run start: Compila y ejecuta el programa
 - npm run check: Comprueba la correccion sintactica del programa completo
 - npm run test: Corre los tests


Las clases testeadas son las unicas para las que hay implementada una logica de negocio hasta el momento, esto es; Location, Restaurant y Product.

### Docker
Para construir la imagen a partir del dockerfile se puede usar la siguiente orden: `docker build . -t iv`.

Para correr la imagen es necesario montar los directorios y se puede usar: `docker run -t -v "`pwd`:/app" iv`.
