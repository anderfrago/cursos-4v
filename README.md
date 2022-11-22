# Desarrollo de Interfaces

## Cuatrovientos

Desarrollo de aplicación CRUD de cursos.

El Backend es una Fake API desarrollada con NodeJS.

El Frontend está desarrollado con **React**-Redux

---

### Cliente:

React con componentes de clase para intentar hacer su código más entendible.
React-Router para la navegación.
React-Redux:

- Se implementa separando Actions y Reducers, intentando facilitar el proceso redux para una mejor compresión

Redux-thunk actualizaciones asíncronas.

### Servidor:

El comando

    node createMockDb.js

genera el archivo db.json que simula una base de datos.
Una vez que tenemos este archivo podemos lanzar el servidor con

    node apiServer.js
