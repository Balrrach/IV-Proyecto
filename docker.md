Los requisitos que se exigen para el contenedor base de docker son:
1. Node incluido
2. Mantenimiento prolongado en el tiempo
3. Ligero

Los únicos contenedores que cumplen el primer y el segundo requisito son los oficiales de node que es pueden encontrar en el enlace: https://hub.docker.com/_/node/.

De las familias disponible las únicas que verifican el tercer requisito son las alpine y las slim. Se ha escogido las basadas en alpine porque las slim sólo incluyen los paquetes mínimos y necesarios para correr node. Son extremadamente austeras.
Los mismos creadores de los contenedores recomiendan su uso únicamente si se va a trabaja en un entorno con espacio restringido en el que sólo se va a desplegar la imagen node. No se tiene certeza de que no hagan falta desplegar más imágenes en el futuro y el espacio, aunque relevante, no es crucial.
