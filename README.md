# Desarrollo de Interfaces
## Cuatrovientos

Desarrollo de aplicación CRUD de cursos.
El Backend es una Fake API desarrollada con NodeJS
El Frontend está desarrollado con ReactNative-Redux

---

### Para la ejecución del servidor:
El comando     

    node createMockDb.js 

genera el archivo db.json que simula una base de datos. 
Una vez que tenemos este archivo podemos lanzar el servidor con

    node apiServer.js

### Para la ejecución del cliente.
Es requisito tener un emulador o dispositivo Android conectado al equipo.
Lanzamos el script 

    yarn start

y 

    npm run android-dev 


Con este script (situado en package.json) lanzamos a la vez la conexión entre servidor y cliente en tcp:3001

    adb reverse tcp:3001 tcp:3001

y la ejecución de la aplicación en el dispositivo

    yarn android



