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

## Reglas para el manejo de ramas

El proyecto utiliza un flujo de trabajo basado en ramas para facilitar el desarrollo colaborativo y asegurar que el código en `main` siempre esté estable. Las ramas se organizan de la siguiente forma:

- **`main`**: Es la rama principal del proyecto y debe contener únicamente el código en producción. No se debe hacer ningún commit directo en `main`.

- **`develop`**: Es la rama de desarrollo principal, donde se integran los cambios de todas las ramas de los colaboradores. Solo se permite hacer merge de las ramas personales cuando los cambios estén completos y probados.

- **Ramas personales (`angel`, `ramses`, `glen`)**: Cada colaborador tiene su propia rama donde debe trabajar de manera independiente. Los colaboradores pueden hacer commits y experimentar en sus respectivas ramas siempre que no se esté trabajando en conjunto con otros.

### Proceso para hacer commits en sus ramas

1. **Asegúrate de estar en tu rama personal**: Antes de comenzar a hacer cambios, verifica que estés en tu rama. Puedes cambiar a tu rama con el siguiente comando:

   ```bash
   git checkout angel
   ```

   (Reemplaza angel con el nombre de tu rama si eres otro colaborador).

2. **Agrega los cambios a tu área de preparación**: Antes de hacer un commit, asegúrate de que estés en tu rama y que los cambios estén en el directorio actual.

3. **Crea un commit**: Cuando hayas terminado de hacer los cambios y estés seguro de que están bien, crea un commit con el siguiente comando:

   ```bash
   git add .
   git commit -m "Descripción del cambio"
   ```

4. **Push a tus cambios**: Después de crear el commit, pusha tus cambios a tu rama con el siguiente comando:

   ```bash
   git push origin angel
   ```

   (Reemplaza angel con el nombre de tu rama si eres otro colaborador).

5. **Preparación para la fusión (merge)**: Cuando estés listo para fusionar tus cambios en develop, asegúrate de hacer un pull de develop primero para evitar conflictos:

   ```bash
   git checkout develop
   git pull origin develop
   ```

   Luego, vuelve a tu rama y fusiona develop en tu rama:

   ```bash
   git checkout angel
   git merge develop
   ```

## Comandos

Para clonar el proyecto desde el repositorio, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina:

   ```bash
   git clone https://github.com/angeljpeg/utn-pagina.git
   ```

2. Entra en la carpeta del proyecto:

   ```bash
      cd utn-pagina
   ```

Para ejecutar el proyecto localmente, sigue los siguientes pasos:

1. Instala las dependencias necesarias:

   ```bash
      npm install
   ```

2. Ejecuta el servidor de desarrollo:

   ```bash
      npm run dev
   ```

3. Abre el navegador y acceda a `http://localhost:5173`.

## Colaboradores

- [Alexis Gonzalez](https://github.com/angeljpeg)
- [Garib Quen](https://github.com/suputmadreloco)
- [Glen Valenzuela](https://github.com/suputamadrepordosloco)
