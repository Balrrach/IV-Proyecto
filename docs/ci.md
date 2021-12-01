Requisitos para el sistema online de prueba de código:
1. Construye en linux
2. Gratuito
3. Limite de minutos razonable
4. Sin limite de proyectos
5. Minima configuracion necesaria

Los sistemas de prueba de codigo online que verifican los requisitos son Github Actions, Circleci y Semaphore. De los tres se ha escogido GithubActions como sistema pricipal y Circleci como secundario:
- GitHub Actions: Es el mas novedoso y simple de los tres en el sentido de que los otros dos parecen ser soluciones más completas que dan una respuesta a muchas mas necesidades además del testeo en la nube. Además, ofrece minutos ilimitados para proyectos de software libre, permite la ejecucion de los test en paralelo y el entorno de CI y el repositorio conviven en la misma plataforma.
- Circleci: Permite ajustar la potencia de los computadores que van a correr los test de forma que es posible alcanzar un compromiso entre el numero de minutos y la velocidad a la que se corren los test. No hay limite de minutos para los proyectos open source y , ademas, se pueden correr hasta 30 test en paralelo en hasta cuatro contenedores.
