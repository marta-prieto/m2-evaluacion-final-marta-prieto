EVALUACIÓN FINAL MÓDULO 2
Marta Prieto



## Información del proyecto

Se requiere realizar una web en la que el usuario pueda buscar un listado de nombre de series haciendo click en el botón y le aparezca el listado de las mismas.

## Requerimiento del proyecto

Crear código JavaScript con sintaxis correcta, bien estructurado e indentado *
Usar constantes/variables para almacenar información y re‒asignar valores *
Usar condicionales para ejecutar acciones distintas en función de una condición
Listados de datos (arrays) *
Funciones para estructurar el código
Modificar la información del DOM para añadir contenido dinámico *
Escuchar eventos del DOM y actuar en consecuencia *
AJAX y APIs
Utilizar fetch y promesas *
Trabajar correctamente con la respuesta del servidor *
Gestionar información en formato JSON
Usar el localStorage para guardar información en el navegador
Usar inglés para nombres de variables, funciones, clases, mensajes de commit, nombres de
ficheros

## Estructura del proyecto
La estructura de carpetas:
```
/
`- _src
   |- assets
   |  |- icons
   |  |- images
   |  |- js
   |  `- scss
   |     `- core
   |
   
```
## JS
Se requiere a través de un botón y un input de búsqueda donde escribe el usuario que a través de una Api nos devuelve la petición que es la información que busca la persona. Utilizando Listener al hacer click nos muestra el listado de series, que previamente se han filtrado por el nombre de la búsqueda. A su vez, se aplica a través de otra función la posibilidad de seleccionar la serie favorita que se desee por lo que todo ello se utiliza un array para recorrer toda la información y volcarla en la web del usuario.Para gurdar la información aún recargando la página se utiliza localstorage y así no perder las búquedas previas.

## HTML
Está estructurado dentro de un contenedor principal en cual se divide en dos secciones, una con un listado de series (guardas en base de datos) y otra un listado de series favoritas.

## Imágenes
Las imágenes se enlazan a través de la Api y en el caso de no contener imagen se añaden a través de la https facilitada en las instrucciones del proyecto (https://via.placeholder.com/210x295/ffffff/666666/?text=TV)

## CSS / SCSS
Se aplica los estilos de las imágenes, color y fuentes para darle forma a la web. En este caso son etiquetas de cada serie y se aplica color inverso cuando se seleccionan las peliculas favoritas (cambia el color del fondo y de las letras del título si se hace click para elegir la serie favorita)


