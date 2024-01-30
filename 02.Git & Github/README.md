## Aprendizaje del Estudiante sobre Git y Control de Versiones

### Git - Introducción

Git es un sistema de control de versiones que sirve como herramienta para mantener un registro de cambios en proyectos de desarrollo. Desarrollado por Linus Torvalds en 2005, se convirtió en el sistema más utilizado.

### Trabajar con Git

Antes de Git, mi proceso de versionamiento era lineal. Con Git, puedo visualizar el historial de cambios en un proyecto mediante "commits". Cada versión se representa por un "commit", que incluye información como fecha, autor y un hash único.

Además, la capacidad de trabajar en paralelo usando "branches" facilita el desarrollo simultáneo de diferentes características.

### Configuración de Usuario

Aprendí a configurar mi usuario en Git con comandos como:

```bash
git config --global user.name 'Nombre Apellido'
git config --global user.email email
```

Y puedo verificar la configuración con:

```bash
git config --global -l
```

### Estructura de un Repositorio

Un repositorio en Git está conformado por un directorio que contiene un subdirectorio llamado `.git`. Este subdirectorio almacena toda la información del repositorio, como commits, branches y configuraciones locales.

### Flujo de Trabajo (Workflow)

El flujo de trabajo de Git implica tres áreas:

- **Working Directory**: Donde se realizan modificaciones a los archivos del proyecto.
- **Staging Area**: Los archivos modificados se envían aquí antes de almacenarlos en el registro de cambios.
- **Repository**: Donde se encuentran todos los registros de cambios.

### Comandos Básicos

- `git add`: Pasa del working directory al staging area.
- `git commit`: Pasa del staging area al repository.
- `git status`: Muestra el estado de los archivos.
- `git log`: Lista los commits en el historial.

### Diferencias y Visualización

- `git diff`: Muestra cambios entre dos commits o branches.
- `git log -p`: Muestra el historial de cambios con detalles.
- `git show <commit>`: Muestra detalles específicos de un commit.

### Ignorar Archivos

Aprendí a crear un archivo `.gitignore` para especificar qué archivos o directorios deben ser ignorados en el seguimiento de cambios.

### Ramas (Branches)

Las ramas permiten trabajar en secuencias de cambios independientes. Puedo crear, listar y cambiar entre ramas con comandos como `git branch`, `git switch`, y `git checkout`.

### Navegando en el Tiempo

Usando `git checkout`, puedo cambiar mi directorio de trabajo a un commit anterior, explorando diferentes momentos en la historia del proyecto.

### Remotos y Colaboración

Para colaborar con otros, entendí cómo agregar, listar y eliminar remotos, y cómo usar `git push`, `git pull` y `git fetch` para gestionar cambios.

### Mezclar Ramas y Resolver Conflictos

- `git merge`: Combina cambios de una rama a otra.
- Cuando hay conflictos, se resuelven manualmente.

Este viaje en Git ha transformado mi enfoque en el desarrollo de software, brindándome un control preciso sobre los cambios y una colaboración eficiente con otros desarrolladores.