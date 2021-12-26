## Task Runner
Como gestor de tareas se ha escogido npm. Se tiene conciencia de que npm es un gestor de dependencias pero esa es tan sólo su función básica, en realidad puede hacer mucho más. Usarlo tiene la ventaja de que ya es una herramienta en uso en el proyecto y, por lo tanto no hay necesidad de instalar ninguna otra. Como desventaja tiene su limitada sintaxis que hace que, por ejemplo, la composición de tareas sea poco estilosa. Sin embargo la embergadura del proyecto hace que sus limitaciones no sean vinculantes.


## Test Framework
Para la implementación de los tests se ha optado por el uso del framework de tests __mocha__, en concreto su version para typescript __ts-mocha__ y la biblioteca de aserciones __chai__. Ambos son muy conocidos y utilizados en el desarrollo de aplicaciones javascript y typescript.
__mocha__ esta especialmente diseñado para testear aplicaciones dentro del marco de Node en el desarrollo del backend. Para ello cuenta con caracteristicas que facilitan el testeo de funciones asincronas y librerias que permiten incorporar cualquier funcionalidad deseada haciendolo mas potente que otras alternativas como Jest o Jasmine y mas adecuado para arquitecturas con caracter expansivo.
Todo esto ligado a su popularidad, su facilidad de uso, la capacidad de la utilizar tipado de forma directa en los propios tests y su flexibilidad justifican su eleccion.


## Contenedores
Los requisitos que se exigen para el contenedor base de docker son:
1. Node incluido
2. Mantenimiento prolongado en el tiempo
3. Ligero

Los únicos contenedores que cumplen el primer y el segundo requisito son los oficiales de node que es pueden encontrar en el enlace: https://hub.docker.com/\_/node/.

De las familias disponible las únicas que verifican el tercer requisito son las alpine y las slim. Se ha escogido las basadas en alpine porque las slim sólo incluyen los paquetes mínimos y necesarios para correr node. Son extremadamente austeras.
Los mismos creadores de los contenedores recomiendan su uso únicamente si se va a trabaja en un entorno con espacio restringido en el que sólo se va a desplegar la imagen node. No se tiene certeza de que no hagan falta desplegar más imágenes en el futuro y el espacio, aunque relevante, no es crucial.


## CI
Requisitos para el sistema online de prueba de código:
1. Construye en linux
2. Gratuito
3. Limite de minutos razonable
4. Sin límite de proyectos
5. Mínima configuración necesaria

Los sistemas de prueba de código online que verifican los requisitos son Github Actions, Circleci y Semaphore. De los tres se ha escogido GithubActions como sistema pricipal y Circleci como secundario:
- GitHub Actions: Es el mas novedoso y simple de los tres en el sentido de que los otros dos parecen ser soluciones más completas que dan una respuesta a muchas mas necesidades además del testeo en la nube. Además, ofrece minutos ilimitados para proyectos de software libre, permite la ejecucion de los test en paralelo y el entorno de CI y el repositorio conviven en la misma plataforma. Ejecutará los tests unitarios y los tests relacionados con la actualización de los contenedores docker.
- Circleci: Permite ajustar la potencia de los computadores que van a correr los test de forma que es posible alcanzar un compromiso entre el número de minutos y la velocidad a la que se corren los test. No hay límite de minutos para los proyectos open source y se pueden correr hasta 30 test en paralelo en hasta cuatro contenedores. Además, es sencillo y rápido de configurar. Ejecutará los tests relacionados con el control de las versiones de compilación.


## Logger
Es conveniente disponer de un sistema de logs para que los errores reportados por los usuarios sean trazables y los desarrolladores puedan arreglarlos con mayor facilidad.
Los requisitos para el logger son:

#### Necesario:
1. Permite diferentes niveles de loggeo: Absolutamente necesario para estructurar los logs
2. Permite la personalización del fichero de salida: Muy conveniente para gestionar el historial de logs
3. Permite formatear/estructurar los logs: Permite mostrar contenido diferente en función de la necesidad
4. Permite mostrar los logs por pantalla con ajuste dinámico: Permite usar la funcionalidad de log para debuggear el codigo en caso de necesidad
5. Permite dar color a los logs por pantalla: Da mayor legibilidad a los logs

#### Conveniente:
1. Soporte para tipos de typescript
2. Lazy loading: Permite minimizar el tiempo de arranque
3. Simplicidad y buena notación: Facilitan enormemente su uso
4. Archivos rotatorios
5. Permite su uso en el navegador: Da mayor versatilidad
6. Permite medir el tiempo por medio de timestamps: Puesto que la aplicación se ejecuta en tiempo real y el rendimiento es fundamental
7. Permite desactivar los logs: En caso de haber alcanzado una gran estabilidad y necesitar máxima eficiencia
8. Mantiene la pila de llamadas intacta
9. Eficiencia(poco sobrecoste)

Se han considerado los siguientes loggers:
- [winston](https://www.npmjs.com/package/winston)
- [pino](https://www.npmjs.com/package/pino)
- [bunyan](https://www.npmjs.com/package/bunyan)
- [bole](https://www.npmjs.com/package/bole)
- [debug](https://www.npmjs.com/package/debug)
- [ulog](https://www.npmjs.com/package/ulog)
- [roarr](https://www.npmjs.com/package/roarr)
- [loglevel](https://www.npmjs.com/package/loglevel)
- [log4js](https://www.npmjs.com/package/log4js)

Los únicos que verifican todos los requisitos necesarios son: winston, pino, bunyan, ulog.
De estos winston y bunyan, pese a ser los de mayor calado y los que tienen un mayor número de proyectos dependientes se encuentran un estado de conservación deplorable.
La última versión de ambos salió hace dos años y sus respectivos repositorios tienen la bandeja de issues a los que no responden llenas y están igualmente abrumados por PR ignorados desde hace años.
Entre pino y ulog se tiene la siguiente comparación en términos de objetivos secundarios:
- pino: 1, 3, 5 y 9
- ulog: 2, 3, 5 y 8

Finalmente se ha elegido pino porque, aunque ambos verifican el mismo número de objetivos secundarios, los que verifica pino son más relevantes, en particular 1(soporte nativo para typescript).


## Configuración Remota
Es conveniente disponer de un sistema de conexión con un servidor que actúe como depósito de clave-valor a través del cual se puedan recopilar datos como archivos de configuración evitando a través de este mecanismo la necesidad de incluir datos sensibles junto con las copias del programa lo cual puede suponer problemas de seguridad, entre otros.
Uno de los sistemas que permite dicho uso es [etcd](https://etcd.io/). Y una de las librerías que inplementa su API(más bien etcd3 que es una interfaz de alto nivel que permite la interación con etcd) es [etcd3](https://www.npmjs.com/package/etcd3).
La librería está implementada por Microsoft lo cual es positivo puesto que lo usa en sus propios proyectos y es más difícil que se abandone a largo plazo.
Además, tiene muy pocos issues y PR abiertos y todos los PR están relacionados con la actualización de dependencias mientras que ningún issue está relacionado con bugs sino con enriquecimientos y otros.
Queda fuera de las miras de la asignatura la configuración de un servidor pero se ha simulado su funcionamiento en la aplicación. Para acerlo funcionar correctamente bastaría con instanciar el objeto con los valores de un puerto de un servidor correctamente configurado.


## Variables de Entorno
Es necesario cargar la configuración a partir de un fichero local. Para esto se puede parsear el archivo o se puede utilizar una librería que realice esta función.
Reinventar la rueda puede introducir errores inesperados y es una pérdida de tiempo por lo que se ha optado por el uso de una librería. 
Requisitos para la librería:
1. Capacidad de configuración desde la terminal
2. Soporte para tipos de typescript

Las librerías consideradas son:
- [dotenv](https://www.npmjs.com/package/dotenv)
- [env2](https://www.npmjs.com/package/env2)
- [nconf](https://www.npmjs.com/package/nconf)
- [envalid](https://www.npmjs.com/package/envalid)

envalid es muy interesante porque permite obtener la configuración de un servidor pudiendo ejercer también como un librería para la configuración remota pero no verifica 1 por lo que ha sido descartada.
env2 no verifica 2 por lo que también ha sido descartada. Por último, entre dotenv y nconf se ha escogido dotenv fundamentalmente por tres motivos.
El primero es que el estado de mantenimiento de dotenv es mucho mejor que el de nconf; aunque la última versión disponible de dotenv es algo más antigua que la de nconf este último tiene la friolera de un 98 issues abiertos a 26 de diciembre de 2021. Además, cuanto más se avanza en el historial de issues se observa que estos no son respondidos por ninguno de los mantenedores.
El segundo es que, mientras que dotenv no tiene dependencias, nconf tiene 4. Cuantas menos dependencias la librería mejor porque menos dependencias tendrá el proyecto.
El tercero es que dotenv tiene el soporte para tipos totalmente integrado mientras que nconfg las tiene en un paquete a parte(esto es un detalle).

