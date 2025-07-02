# PW Fundacion Pinita

## Descripción

Esta es una pagina web 
Este es un proyecto personal diseñado para [ejemplo: crear una plantilla web moderna y eficiente, practicar el desarrollo front-end con Gulp, etc.].

## Estructura del Proyecto

La estructura del proyecto sigue una organización clara para facilitar el desarrollo y mantenimiento:

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías y herramientas:

* **HTML5**
* **SCSS (Sass):** Para preprocesar CSS y organizar estilos de manera modular.
* **JavaScript:** Para la lógica del lado del cliente.
* **Gulp.js:** Como automatizador de tareas para:
    * Compilar SCSS a CSS (`gulp-sass`, `dart-sass`).
    * Minificar JavaScript (`gulp-terser`).
    * Redimencionar el peso de las imagenes
    * Crear tubnails para minimizar el peso de la PW
* **NPM:** Gestor de paquetes para las dependencias del proyecto.

## Requisitos

Para poder correr y desarrollar en este proyecto, necesitas tener instalado:

* [Node.js](https://nodejs.org/) (incluye NPM)

## Primeros Pasos

Sigue estas instrucciones para configurar el proyecto en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/JazminGonz/PLANTILLA.git]
    cd [NOMBRE_DE_TU_CARPETA_CLONADA]
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
    Esto instalará todas las dependencias listadas en `package.json`.

3.  **Ejecuta las tareas de Gulp:**
    El `gulpfile.js` define varias tareas para compilar y procesar los archivos.

    * **Compilar JS:**
        Para procesar y minificar el JavaScript (definido en la función `js` de tu `gulpfile.js`):
        ```bash
        gulp js
        ```
        Esto tomará `src/js/app.js`, lo pasará por `terser` y lo guardará en `build/js`.

    * **[Añade aquí cómo compilar SCSS, si tienes una tarea Gulp para ello]**
        Por ejemplo, si tienes una tarea `styles` en tu Gulpfile:
        ```bash
        gulp styles
        ```

    * **Modo desarrollo (Watch):**
        Si tienes una tarea `watch` en tu `gulpfile.js` para observar cambios y recompilar automáticamente (muy común en desarrollo):
        ```bash
        gulp watch
        ```
        (Asegúrate de que esta tarea esté definida en tu `gulpfile.js` si la mencionas).

    * **Tarea predeterminada (Default):**
        Si tienes una tarea `default` que ejecuta varias subtareas (ej. compilar todo, iniciar un servidor de desarrollo):
        ```bash
        gulp
        ```

## Uso

Una vez que las tareas de Gulp han procesado los archivos, puedes abrir `index.html` directamente en tu navegador para ver el proyecto.


## Contribución

Este es un proyecto personal, pero si tienes sugerencias o encuentras errores, ¡siéntete libre de abrir un issue o un pull request!

## Licencia

Este proyecto está bajo la licencia [ELIGE UNA LICENCIA, por ejemplo: MIT License]. Consulta el archivo `LICENSE` para más detalles.
(Si no tienes un archivo `LICENSE`, puedes omitir esta sección o indicar que es "Propiedad personal".)

---