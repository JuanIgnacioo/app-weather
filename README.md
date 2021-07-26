## _Aplicacion del clima_

# PASOS PARA LEVANTAR LA APLICACION

Una vez clonado el repositorio, se deben instalar las dependencias con el comando "npm i", y posteriormente "npm run start" o "npm start"
Por default, la aplicacion se levantara en el puerto 3000.

```sh
npm i
npm run start
```

## PASOS PARA CORRER LOS TEST

Se debe ejecutar el siguiente comando
```sh
npm run test
```
En la consola, se detallan los resultados de los mismos.


## Herramientas utilizadas en el proyecto

1 - sweetalert2 para modales de advertencia de error
2 - Axios para realizar peticiones 
3 - React-router-dom para el manejo de ruteo (solo contiene la ruta raiz "/")
4 - Material - UI para el diseño
5 - Hooks para el manejo de estados en React.
6 - API http://ip-api.com/ para obtener datos de la posicion actual
7 - API https://www.weatherbit.io/ para obtener los datos del clima
8 - TypeScript
9 - Testing Library

## TEST CASES
**Ver datos del clima de la ubicacion actual**
Precondicion : Abrir la app -> verificar que los datos esten cargados en pantalla 
Resultado esperado : Se visualizan los datos del clima de la ubicacion actual, el pronostico extendido y los destacados de la fecha
Resultado actual : Se valida el resultado esperado.
Status: aprobado

**Ver datos del clima de una ubicacion deseada**
Precondicion : Arbrir la app -> ingresar un nombre en el buscador -> Presionar tecla "Enter" -> verificar que se cargan los datos en pantalla
Resultado esperado : Se visualizan los datos del clima de la ubicacion deseada, el pronostico extendido y los destacados de la fecha
Resultado actual : Se valida el resultado esperado.
Status: aprobado

**Verificar validacion del buscador**
Precondicion : Arbrir la app -> ingresar un nombre de ubicacion inexistente -> Presionar tecla "Enter" -> verificar que se carga el modal de validacion
Resultado esperado: Se visualiza un modal con el mensaje correspondiente de error y se establece por default "Ciudad Autonoma de Buenos Aires"
Resultado actual : Se valida el resultado esperado.
Status: aprobado
