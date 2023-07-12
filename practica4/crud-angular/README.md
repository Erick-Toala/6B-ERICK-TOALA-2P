# 06-layers (BACKEND)

Este proyecto se generó con [Node JS] servicio monolítico con sus 3 rutas funcionales.

## Instalar dependencias BACKEND

Ejecute `npm install` para instalar todas las dependencias del servidor backend. ![Instalar dependencias](./imagenes/image-3.png).

## Levantar servicio

Ejecute `npm run start` para levantar el servicio del backend. ![Levantar backend](./imagenes/image.png).


# DeportistasCRUD (FRONTEND)

Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) versión 15.0.2.

## Instalar dependencias FRONTEND

Ejecute `npm install` para instalar todas las dependencias del servidor frotend. ![Instalar dependencias](./imagenes/image-2.png).

## Levantar servidor

Ejecute `ng serve` para un servidor de desarrollo. Navegue a `http://localhost:4200/`. ![Levantar frontend](./imagenes/image-1.png).

# Ejecución

Una vez levantados el backend y frontend podremos navegar por las 3 rutas funcionales del programa.

## CRUD
 
Ejemplo Deportista

CREATE - Para crear un nuevo deportista ingresamos los datos correspondientes ![CREATE Deportista](./imagenes/image-4.png), y le damos al botón guadar, como podremos observar el la parte de abajo se ha creado ![Deportista creado](./imagenes/image-5.png).

GET - Podemos observar en la parte inferior a todos los deportistas que han sido creados ![GET Deportistas](./imagenes/image-6.png).

UPDATE - Para actualizar un deportista, primero colocamos el ID del Deportista en el input "ID Deportista (Para Actualizar)", colocamos la nueva información a actualizar ![UPDATE Deportista](./imagenes/image-7.png) y click en actualizar, para observar los cambio ![Deportista actualizado](./imagenes/image-8.png)

DELETE - Para eliminar un deportista le damos click al botón Eliminar de ese deportista y listo. ![DELETE Deportista](./imagenes/image-9.png)


## INSTRUCCIONES CUMPLIDAS (PRÁCTICA)

1. Levantar su servicio monolítico con sus 3 rutas funcionales. ![SERVICIO MONOLÍTICO](./imagenes/image-10.png).

2. Crear el front-End (CSR o SSR) para los CRUD de las 2 entidades maestras.

    Deportistas. ![Front-End Deportistas](./imagenes/image-11.png).
    Tipo Ejercicio. ![Front-End Tipo Ejercicio](./imagenes/image-12.png).

3. Crear el front-End (sólo es permitido CSR) para la entidad transaccional. 

    Ejercicio Realizado. ![Front-End Ejercicio Realizado](./imagenes/image-13.png).

4. En el front-end de la entidad transaccional ubicar 2 elementos de selección (Select, dropdown, radio, listbox, etc.) para escoger entre los maestros previamente definidos. 

    Select para Tipo Ejercicio. ![Tipo Ejercicio](./imagenes/image-14.png).
    Select para Deportista. ![Deportista](./imagenes/image-15.png).

5. Validar que todos los textos ingresados se encuentren en minúsculas, exceptuando las primeras letras de cada palabra y que los números no sean valores negativos o mayores a 9999.

    Validación. ![Validación Datos](./imagenes/image-16.png)

6. Mostrar la consulta de información todo en mayúsculas, y la información numérica en formato moneda. ![Consulta mayúsculas y formato moneda](./imagenes/image-17.png)

