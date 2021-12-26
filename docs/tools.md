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
4. Sin limite de proyectos
5. Minima configuracion necesaria

Los sistemas de prueba de codigo online que verifican los requisitos son Github Actions, Circleci y Semaphore. De los tres se ha escogido GithubActions como sistema pricipal y Circleci como secundario:
- GitHub Actions: Es el mas novedoso y simple de los tres en el sentido de que los otros dos parecen ser soluciones más completas que dan una respuesta a muchas mas necesidades además del testeo en la nube. Además, ofrece minutos ilimitados para proyectos de software libre, permite la ejecucion de los test en paralelo y el entorno de CI y el repositorio conviven en la misma plataforma.
- Circleci: Permite ajustar la potencia de los computadores que van a correr los test de forma que es posible alcanzar un compromiso entre el numero de minutos y la velocidad a la que se corren los test. No hay limite de minutos para los proyectos open source y se pueden correr hasta 30 test en paralelo en hasta cuatro contenedores. Ademas es sencillo y rapido de configurar.

En el reparto de los test:
- GitHub Actions: Ejecutara los tests unitarios y los tests relaccionados con la actualizacion de los contenedores docker.
- Circleci: Ejecutara los tests relaccionados con el control de las versiones de compilacion.


## Logger
Los requisitos para el logger son:

#### Necesario:
1. Permite diferentes niveles de loggeo: Absolutamente necesario para estructurar los logs
2. Permite la personalización del fichero de salida: Muy conveniente para gestionar el historial de logs
3. Permite formatear/estructurar los logs: Permite mostrar contenido diferente en función de la necesidad
4. Permite mostrar los logs por pantalla con ajuste dinámico: Permite usar la funcionalidad de log para debuggear el codigo en caso de necesidad
5. Permite dar color a los logs por pantalla: Da mayor legibilidad a los logs

#### Conveniente:
1. Soporte para typescript
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
