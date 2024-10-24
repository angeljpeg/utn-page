# UTN - University Page Project

## Description

Este proyecto consiste en la creación de una propuesta de página web para la Universidad Tecnológica Nacional. El equipo ha estructurado el proyecto usando componentes reutilizables y páginas organizadas de forma modular para facilitar la escalabilidad y el mantenimiento.

## Estructura del Proyecto

### Componentes

Los componentes se crean en la carpeta `components` y están diseñados para ser reutilizables por diferentes páginas del sitio web. Cada componente tiene su propia carpeta para agrupar todos los archivos relacionados, como su código principal, estilos o constantes.

#### Estructura de un componente:

1. **Archivo `index.js` en la carpeta de cada componente**: Cada componente tiene un archivo `index.js` donde se exporta el componente principal.

   ```js
   // components/Header/index.js
   export { default } from "./Header";
   ```

2. **Archivo components/index.js**: Aquí se centralizan todas las exportaciones de los componentes para ser usados en otras partes del proyecto.

   ```js
   // components/index.js
   export { default as Header } from "./Header";
   export { default as Footer } from "./Footer";
   ```
De esta manera, podrás importar los componentes en cualquier parte del proyecto de la siguiente forma:

```js
import { Header, Footer } from "../components";
```

3. **Archivo `Header.jsx` en la carpeta de cada componente**: El archivo principal del componente, donde se define el componente y su renderizado.

   ```js
   // components/Header/Header.jsx
   export default function Header() {
     return <header>Header</header>;
   }
   ```

4. **Archivo `header.css` en la carpeta de cada componente**: El archivo de estilos CSS para el componente, donde se definen las clases CSS para el componente.

   ```css
   // components/Header/Header.css
   .header {
     @apply text-center text-4xl font-bold text-red-500;
   }
   ```

### Páginas

Las páginas se crean en la carpeta `pages` y están diseñadas para ser reutilizables por diferentes páginas del sitio web. Cada página tiene su propia carpeta para agrupar todos los archivos relacionados, como su código principal, componentes o constantes.

#### Estructura de una página:

1. **Archivo `index.js` en la carpeta de cada página**: Cada página tiene un archivo `index.js` donde se exporta la página principal.

   ```js
   // pages/Home/index.js
   export { default } from "./Home";
   ```

2. **Archivo `Home.jsx` en la carpeta de cada página**: El archivo principal de la página, donde se define la página y sus componentes.

   ```js
   // pages/Home/Home.jsx
   import { Header, Footer } from "../../components";
   export default function Home() {
     return (
       <div>
         <Header />
         <Footer />
       </div>
     );
   }
   ```

3. **Archivo `Home.css` en la carpeta de cada página**: El archivo de estilos CSS para la página, donde se definen las clases CSS para la página.

   ```css
   // pages/Home/Home.css
   .home {
     @apply text-center text-4xl font-bold text-red-500;
   }
   ```

## Comandos

Para clonar el proyecto desde el repositorio, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina:

   ```git clone https://github.com/angeljpeg/utn-pagina.git```

2. Entra en la carpeta del proyecto:

   ```cd utn-pagina```

Para ejecutar el proyecto localmente, sigue los siguientes pasos:

1. Instala las dependencias necesarias:

   ```npm install```
   
2. Ejecuta el servidor de desarrollo:

   ```npm run dev```

3. Abre el navegador y acceda a `http://localhost:5173`.

## Colaboradores

- [Angel Gonzalez](https://github.com/angeljpeg)
