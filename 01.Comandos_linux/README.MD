## Aprendizaje del Estudiante sobre Comandos de Terminal y Linux

### Actualización y Instalación de Paquetes

Para mantener mi sistema actualizado, utilizo comandos como `sudo apt update` para actualizar la lista de paquetes y `sudo apt upgrade` para actualizar todos los paquetes instalados. Además, para instalar nuevos paquetes, empleo `sudo apt install <paquete>`.

**SUDO:** Aprendí que "sudo" significa "Super User DO" y se usa para realizar acciones en modo de superusuario, lo cual es necesario para realizar tareas que requieren permisos especiales.

**MAN:** Cuando necesito obtener información detallada sobre un comando, utilizo `man comando` para acceder al manual y entender su funcionalidad.

**PWD:** Para saber en qué directorio estoy trabajando actualmente, uso el comando `pwd`, que me proporciona la ruta completa del directorio raíz.

**CLEAR:** Si la terminal se llena de comandos y quiero limpiarla, simplemente escribo `clear` para tener una pantalla más limpia.

### Sistema de Archivos

Explorando el sistema de archivos, descubrí:

- `/`: El directorio raíz del sistema.
- `.`: El directorio actual.
- `..`: El directorio superior.
- `~`: Hace referencia al directorio home del usuario actual.

Además, el comando `cd` me permite cambiar entre directorios, y aprendí a usar `cd /`, `cd ~`, y `cd ..`.

### Comodines

Los comodines son útiles para hacer búsquedas más flexibles:

- `*`: Reemplaza n número de caracteres.
- `?`: Reemplaza un solo carácter.

### Comandos Básicos

- `ls`: Lista el contenido del directorio actual. Puedo usar opciones como `-a`, `-l`, `-h`, y `-r` para personalizar la salida.
- `mkdir`: Crea directorios con `mkdir [opción] nombre_del_directorio`.
- `touch`: Crea nuevos archivos de texto con `touch nombre_del_archivo.txt`.
- `nano`: Edita archivos de texto con `nano nombre_del_archivo`.
- `cat`: Imprime y concatena archivos en la terminal sin editarlos con `cat nombre_del_archivo`.
- `mv`: Mueve o renombra archivos y directorios con `mv origen salida`.
- `cp`: Copia archivos y directorios con `cp origen destino`.

### Eliminación de Archivos y Directorios

Para eliminar archivos y directorios, utilizo:

- `rm`: Elimina archivos o directorios. Uso `rm -r` para directorios y comodines para búsquedas más específicas.

### Visual Studio Code desde la Terminal

Puedo abrir Visual Studio Code desde la terminal con el comando `code`. Por seguridad, agrego `./` antes del directorio para crearlo si no existe.

### Variables de Entorno y Alias

- `echo`: Muestra el valor de una variable de entorno con `echo $variable`.
- `export`: Crea variables de entorno con `export VARIABLE=valor` y las elimino con `export -n VARIABLE`.
- `alias`: Creo alias para comandos con `alias nombre='comando'`.

### Búsqueda y Filtrado

- `find`: Busca archivos por nombre o ruta. Por ejemplo, `find ./ -name '*.html'` busca archivos HTML.
- `grep`: Busca coincidencias de patrones en archivos. Puedo especificar líneas antes y después de las coincidencias.

### Permisos de Acceso

Comprendo cómo funcionan los permisos de archivos y directorios para el owner, group, y others, utilizando combinaciones de r/w/x.

Este viaje de aprendizaje me ha permitido explorar y entender la potencia de la línea de comandos en Linux, facilitándome la gestión de archivos, la navegación del sistema y la configuración del entorno.