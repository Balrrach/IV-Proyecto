# REST API

## Verbos HTTP utilizados

| Verbo	| Descripción	|
|---	|---		|
| GET	| Usado para la obtención de recursos	|
| POST	| Usado para la creación de recursos	|
| PUT	| Usado para la actualización de recursos|
| DELETE| Usado para la eliminación de recursos	|

## Recursos

### Productos

| Verbo	| URI		| Descripción						|
| ---	| ---		| ---							|
| GET	| /product	| Obtención de todos los productos			|
| GET	| /product/id	| Obtención del producto relacionado con la id		|
| POST	| /product	| Creación de un nuevo producto				|
| PUT	| /product	| Actualización de un producto				|
| DELETE| /product/id	| Eliminación del producto relacionado con la id	|

No se proporciona la funcionalidad relacionada con la eliminación de varios productos puesto que, en principio, no es necesaria.


### Restaurantes

| Verbo	| URI		| Descripción						|
| ---	| ---		| ---							|
| GET	| /restaurant	| Obtención de todos los restaurantes			|
| GET	| /restaurant/id| Obtención del restaurante relacionado con la id	|
| POST	| /restaurant	| Creación de un nuevo restaurante			|
| PUT	| /restaurant	| Actualización de un restaurante			|
| DELETE| /restaurant/id| Eliminación del restaurante relacionado con la id	|

No se proporciona la funcionalidad relacionada con la eliminación de varios restaurantes puesto que, en principio, no es necesaria.


### Repartidor

| Verbo	| URI			| Descripción						|
| ---	| ---			| ---							|
| POST	| /deliveryMan		| Creación de un nuevo repartidor			|
| PUT	| /deliveryMan		| Actualización de un repartidor			|
| DELETE| /deliveryMan/id	| Eliminación del repartidor relacionado con la id	|

No se proporciona la funcionalidad relacionada con la eliminación de varios repartidores puesto que, en principio, no es necesaria.
No se proporciona la funcionalidad relacionada con la obtención de repartidores porque no existe ningún motivo para ello. El objeto repartidor está ligado a la cuenta del repartidor y no existe ningún motivo por el que otro pueda necesitar accederlo puesto que su uso fundamental se encuentra en la creación de las rutas que no son un recurso en si mismas.


### Pedido

| Verbo	| URI		| Descripción						|
| ---	| ---		| ---							|
| POST	| /order	| Creación de un nuevo restaurante			|
| PUT	| /order	| Actualización de un restaurante			|
| DELETE| /order/id	| Eliminación del restaurante relacionado con la id	|

No se proporciona la funcionalidad relacionada con la eliminación de varios pedidos puesto que, en principio, no es necesaria.
No se proporciona la funcionalidad relacionada con la obtención de pedidos porque no existe ningún motivo para ello. El objeto pedido está ligado a la cuenta del cliente y no existe ningún motivo por el que otro pueda necesitar accederlo puesto que su uso fundamental se encuentra en la creación de las rutas que no son un recurso en si mismas.

