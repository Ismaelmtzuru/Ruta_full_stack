### HTML

Lenguaje de marcado de hipertexto.
Es la base de todas las páginas web, NO ES UN LENGUAJE DE PROGRAMACIÓN.
- Las etiquetas no llevan espacio.
- El nombre del atributo y valor van separados por un = y se definen en comillas.
- Todas las etiquetas pueden tener atributos.

### ETIQUETAS HTML

`<h1 - h6>`: Definen el tema/título de la sección. El uno define un texto más grande y entre mayor el número, más pequeño el texto.

`<p></p>`: Define un párrafo del texto.

`<a href="url_de_página"></a>`: Define un enlace a otra página.

`<img src="ruta_imágen" alt="descripción de la imagen">`: Define una imagen.

`<span></span>`: Define un texto sin espacios ni estilos.

### Etiquetas elementos raíz

`<!DOCTYPE html>`: Indica que el documento está bajo el estándar de HTML5.

`<html lang="es">`: Representa la raíz de un documento HTML. Es una buena práctica indicar el idioma mediante el atributo lang.

`<!-- comentario -->`: Define un comentario dentro del código.

### Etiquetas metadata

`<head></head>`: Incluye la colección de metadatos sobre el documento y los enlaces a scripts y hojas de estilo.

`<title></title>`: Define el título del documento.

`<meta>`: Define secciones de la página.

`<style></style>`: Permite escribir estilos CSS en el documento.

### Etiquetas semánticas

`<header></header>`: Cabecera de la página.

`<nav></nav>`: Define un menú de navegación.

`<main></main>`: Contenido principal del documento, solo puede haber 1.

`<section></section>`: Define secciones de la página.

`<article></article>`: Define contenido.

`<aside></aside>`: Define la barra lateral.

`<footer></footer>`: Define la parte final de la página u otros elementos.

---

### Tarea 1 - Términos y Condiciones de Spotify

1. **Licencia**: Al aceptar los Términos y Condiciones de Spotify, se concede una licencia no exclusiva para utilizar el servicio de streaming de música bajo ciertas restricciones.

2. **Restricciones de Uso**: Los usuarios no pueden realizar acciones que violen los derechos de autor, modificar el servicio, o utilizarlo de manera que pueda dañar la plataforma o afectar a otros usuarios.

3. **Cuentas y Contraseñas**: Los usuarios son responsables de mantener la confidencialidad de sus cuentas y contraseñas. Spotify no se hace responsable de las actividades realizadas con las credenciales del usuario.

4. **Contenido del Usuario**: Los usuarios son propietarios del contenido que suben, pero al cargarlo en Spotify, otorgan a la plataforma una licencia para usar, reproducir y distribuir dicho contenido.

5. **Política de Privacidad**: Spotify recopila información personal y utiliza cookies. Los usuarios deben revisar la Política de Privacidad para comprender cómo se manejan sus datos.

6. **Actualizaciones y Cambios**: Spotify se reserva el derecho de realizar cambios en los Términos y Condiciones. Los usuarios serán notificados y se espera que revisen las actualizaciones.

7. **Terminación del Servicio**: Spotify puede suspender o terminar cuentas si se violan los términos. Los usuarios pueden cancelar su cuenta en cualquier momento. 

### Investigación UL para hacer listas

La etiqueta `<ul>` se utiliza para crear listas no ordenadas en HTML. Esta etiqueta engloba elementos de lista `<li>`. Por ejemplo:

```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

Esto generará una lista con viñetas:

- Elemento 1
- Elemento 2
- Elemento 3

La etiqueta `<ol>` se utiliza para listas ordenadas, y `<li>` sigue siendo utilizada para los elementos de lista. Estas listas muestran números o letras en lugar de viñetas.