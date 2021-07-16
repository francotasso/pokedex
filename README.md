# pokedex

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Resumen
```
La arquitectura del proyecto está basado en capas:
- La capa de la vista se comunica con la capa de almacenamiento (store)
- La capa de almacenamiento (store) se comunica con la capa de servicios
- La capa de servicios se comunica con el servidor, a través del consumo de la API Rest
De estar manera, estamos desacoplando las funcionalidades de cierta forma

El store fue realizado en base a módulos con la librería vuex, simulando lo que podría suceder 
en una situación real. Mientras más funcionalidades se requerian, se pueden ir sumando más módulos
al store y así estar cumpliendo el principio Open/Closed de los principios S.O.L.I.D

La carpeta de servicios también fue estructurada para que se creen servicios de acuerdo a los módulos
que pueden haber en una aplicación real. Se tiene un archivo central "index" el cual recopila todos
los servicios y los hace accesibles a la capa de almacenamiento (store).

Se hizo uso de un mixin bastante sencillo, el cual presenta un filtro para transformar la primera letra
de una palabra en mayúscula. De esta forma, si en el futuro se crea un componente que requiera de este
filtro, simplemente se utiliza de manera global y no se va a tener que importar cada vez que se necesite.

Se creó la carpeta setup, el cual se encarga de setear el baseUrl de axios. A esta carpeta se le pueden
agregar los interceptores de axios para controlar las peticiones que realizamos al servidor.

Se utilizó la librería lodash.debounce para controlar las búsquedas que se realizan en el input text.
De esta forma no sobrecargamos el servidor con cada letra que escribamos.

Se utilizó la librería BootstrapVue para manejar estilos básicos de destribución de componentes como
contenedores, columnas, etc. A su vez, se utilizaron sus botones y modales para reducir el tiempo de
codificación.

Se utilizó el preprocesador de estilos SASS. Se creó la carpeta scss para establecer estilos globales
en la aplicación. A esta carpeta en un futuro se la puede estructurar con carpetas de vistas y componentes
relacionados a los estilos de componentes Vuejs. Además, los estilos de la aplicación están basados en la
metodología de estilos BEM (Block-Element-Modifier)

Se utilizó la librería vue-svg-loader para tratar a los íconos como si fueran componentes Vuejs.
Los íconos fueron colocados en la carpeta assets.
```

