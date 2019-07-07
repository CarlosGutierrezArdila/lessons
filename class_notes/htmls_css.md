# HTML y CSS

### Etiquetas
Tienen inicio y fin, y el medio es el contenido de la etiqueta, tienen:
- Atributos: Afectan al elemento por su precencia.

##### Etiquetas comunes
- h1-h6: titulos, etc.
- div: Contenedor de elementos
- meta: Se incorporan en el encabezado, tiene name y content
- footer: Contener sección final de la página.
- span: Contenedor generico sin reglas establecidas.
- img: Sin fin, tiene src, de donde viene la imagen.
- a: Hiperlink, href hacia donde va.

Aqui una lista completa

```html
<!–…–>	Define un comentario
<!DOCTYPE>	Define el tipo de docuemento
<a>	Define un hipervínculo
<abbr>	Define una abreviación
<address>	Define la información de contacto del autor / propietario del documento
<area>	Define un área dentro de un mapa de imagen
<article>	Define un artículo
<aside>	Define el contenido lateral del contenedor de una página
<audio>	Define contenido de sonido
<b>	Define texto en negrita
<base>	Especifica la base donde se abrirán todas las URL del documento
<bdi>	Aísla una parte del texto que puede tener un formato diferente del texto externo
<bdo>	Sobreescribe la dirección del texto
<blockquote>	Define una sección que tiene otra fuente
<body>	Define el cuerpo del documento
<br>	Define un salto de línea
<button>	Define un botón clickeable
<canvas>	Se usa para dibujar gráficos en pantalla
<caption>	Define el título de una tabla
<cite>	Define el título de un trabajo
<code>	Define un trozo de código de programación
<col>	Especifica las propiedades de la columna para cada columna del elemento <colgroup>
<colgroup>	Especifica un grupo de una o más columnas de una tabla
<command>	Define un botón command al que un usuario puede invocar
<datalist>	Especifica en un input una lista pre-definida de opciones
<dd>	Define la descripción de un ítem en una lista de definición
<del>	Define un texto que ha sido definido en un Mdocument
<details>	Define detalles adicionales que el usuario puede ver o esconder
<dfn>	Define el término de una definición
<dialog>	Define una caja o ventana de dialogo
<div>	Define una sección en un documento
<dl>	Define una lista de definición
<dt>	Define un término (un ítem) en una lista de definición
<em>	Define énfasis en un texto
<embed>	Define el contenedor de una aplicación externa (no html)
<fieldset>	Grupo de elementos relacionados en un formulario
<figcaption>	Define el título para una figura <figure>
<figure>	Especifica auto-contenido
<footer>	Define el pie de página de un documento
<form>	Define un formulario html
<h1> a <h6>	Define encabezados o títulos
<head>	Define información hacerca del documento
<header>	Define la sección de encabezado del docuemnto
<hgroup>	Grupo de encabezado (<h1> a <6>)
<hr>	Define un cámbio de temática a partir de una línea dibujada
<html>	Define la raíz del documento
<i>	Define una parte del texto de modo alternativo
<iframe>	Define un frame en línea
<img>	Define una imagen
<input>	Define un control de entrada de texto
<ins>	Define texto que ha sido insertado en un documento
<kbd>	Define entrada del teclado
<keygen>	Define un campo generador de claves para formularios
<label>	Define el rótulo para un elemento <input>
<legend>	Define un título para los elementos <fieldset>, <figure>, <details>
<li>	Define un ítem de una lista
<link>	Define la relación entre un documento y un recurso externo (generalmente con hojas de estilo)
<map>	Define un mapa de imagen del cliente
<mark>	Define texto resaltado o marcado
<menu>	Define la lista de un menú
<meta>	Define un metadato de un documento
<meter>	Define una medida escalar en un rango conocido
<nav>	Define un link de navegación
<noscript>	Define un contenido alternativo para los usuarios que no soportan scripts del cliente
<objet>	Define un objeto embebido
<ol>	Define una lista ordenada
<optgroup>	Define un grupo de opciones relacionadas en una lista desplegable
<option>	Define una opción en una lista desplegable
<output>	Define el resultado de un cálculo
<p>	Define un párrafo
<param>	Define un parámetro para un objeto
<pre>	Define texto pre-formateado
<progress>	Representa el progreso de una tarea en una barra
<q>	Define una cita corta
<rp>	Define que debe mostrar en navegadores que no soportan scripts de ruby
<rt>	Define una pronunciación de caracteres
<ruby>	Define una notación de ruby
<s>	Define texto que no es correcto
<samp>	Define un ejemplo de salida de un programa
<script>	Define un script del lado cliente
<section>	Define una sección de un documento
<select>	Define un drop-down list
<small>	Define texto pequeño
<source>	Define los recursos para elementos multimedia
<span>	Define una pequeña sección de un documento
<strong>	Define un texto en negrita
<style>	Define un estilo para la información de un documento
<sub>	Define un texto que es subíndice
<summary>	Define un encabezado visible para el elemento <details>
<sup>	Define un texto que es superíndice
<table>	Define una tabla
<tbody>	Define el cuerpo de una tabla
<td>	Define una celda en una tabla
<textarea>	Define un control de entrada de múltiples líneas
<tfoot>	Agrupa los footer contenidos en una tabla
<th>	Define una celda de encabezado en una tabla
<thead>	Agrupa los encabezados de una tabla
<time>	Define fecha / hora
<title>	Define un título para el documento
<tr>	Define una fila en una tabla
<track>	Define texto de la pista para elementos multimedia (vídeo y audio)
<ul>	Define una lista desordenada
<var>	Define una variable
<video>	Define un vídeo o película
<wbr>	Define un posible salto de linea	
```

### CSS

El CSS (Cascade Styles Sheet) son las hojas de estilo en cascada que definen la apariencia de nuestros documentos en HTML.

Para que nuestros estilos CSS se apliquen correctamente a nuestras páginas web, debemos utilizar la etiqueta link con el atributo href y la ruta a nuestro archivo .css:
```html
<html>
        <head>
                <link rel=""stylesheet"" href=""estilos.css"">
        <head>
        <body>
                ... etc ... etc....
        <body>
<html>
```
Los Selectores nos permiten conectar las etiquetas de HTML con sus respectivos estilos en CSS.
Existen muchos tipos de selectores, por ejemplo, los selectores de clase buscan el contenido que tenga un cierto valor en su atributo class:

```html
CSS (con punto antes del nombre de la clase):
.caja { color: red; }
HTML:
<div class=""caja"">Contenidodiv>
```
También tenemos selectores de tipo ID (estos selectores solo pueden aplicar a un elemento, no va a funcionar si escribimos dos o más etiquetas con el mismo ID):
```html
CSS (con `#` antes del nombre del ID):
#caja { color: red; }

HTML:
<div id=""caja"">Contenidodiv>
```
En CSS utilizamos atributos para definir los estilos de nuestros elementos, podemos modificar el color de la letra, tamaño, color de fondo, espaciado, entre otras:

```css
.caja {
        color: red;
        background: yellow;
        font-size: 10px;
        padding: 20px;
}
```

### Javascript
JavaScript es un lenguaje de programación que nos permite realizar actividades complejas en nuestras páginas web: almacenar valores en variables o realizar operaciones.

Para incluir JavaScript en nuestro HTML debemos utilizar la etiqueta script:

```html
<html>
	<head>
		<script src=""script.js"">
		</script>
	</head>
</html>
```

### Responsive Design 
Consiste en crear estilos que se adapten a cualquier tamaño y posición de nuestros dispositivos electrónicos. Para esto, la mayoría de elementos organizados horizontalmente deben pasar a organizarse verticalmente.

La forma de añadir código CSS que se ejecute para tamaños de pantalla específicos es la siguiente:

```css
@media (max-width: 600px) { /* 600px es solo un ejemplo */
        /* Todos nuestros estilos responsive */
}
```

### Libreria vs Framework
- *Framework:* Marco de trabajo.
- *Libreria:* Conjunto de procedimientos y funciones.