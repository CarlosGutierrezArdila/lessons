# Git
Un sistema de control de versiones como Git nos ayuda a guardar el historial de cambios y crecimiento de los archivos de nuestro proyecto.

En realidad, los cambios y diferencias entre las versiones de nuestros proyecto pueden tener similitudes, algunas veces los cambios pueden ser solo una palabra o una parte específica de un archivo específico. Git está optimizado para guardar todos estos cambios de forma atómica e incremental, o sea, aplicando cambios sobre los últimos cambios, estos sobre los cambios anteriores y así hasta el inicio de nuestro proyecto.

### Ciclo básico de trabajo
`git init` crea dos cosas:
- *Carpeta .git (Repositorio):* Base de datos del proyecto.
- *Area enmemoria RAM `Staging`:* Guarda temporalmente archivos.

##### Estados de un archivo:
- *Tracked:* Solo archivos que estan en git, no tienen cambios pendientes y sus últimas actualizaciones han sido guardadas.
- *Staged:* Archivos que estan en `Staging`. Los cambios no se han guardado definitivamente.
- *Unstaged:* Archivos cuyos  cambios no se encuentran en el `staging` aún.
- *Untracked:* No  estan en el entorno de git.
Se puede dat el caso en que dos archivos esten en dos estados a la vez en *Staged* y *Untracked* cuando se guardan cambios en el staging y luego se vuelven a hacer cambios.

### Comandos
- `git init`: Inicia repo
- `git add`: Agrega un archivo. Este comando no almacena las actualizaciones de forma definitiva, solo las guarda en algo que conocemos como “Staging Area".
    - `-A`: Agrega todos lso archivos.
- `git commit`: Guarda los cambios definitivos. 
    - `-m`: Agrega mensaje al commit.
    - `-a`: Agrega todos los cambios.
- `git push`: Mandar repo a un servidor remoto.
- `git fetch`: TRae los cambios pero no lo copia en los archivos.
- `git pull`: Traer cambios de un repositorio remoto (Fusiona fetch y merge).
- `git status`: Status de la base.
- `git show`: Cambios historicos hechos.
- `git log`: Todos los cambios.
    - `filename`: Cambios en un archivo.
    - `--oneline`: Log en una linea.
    - `--start`: Cambios especificos en cada archivo.
- `git --version`: Version de git.
- `git reset`: Borra lo que se hizo antes.
    - `HEAD`: Saca archivos de staged a su estado anterior (Untracked o unstaged).
    - `commit`: Los dirige a un estado anterior por el hash de un commit.
    - `--hard`: Todo lo regresa al estado anterior.
    - `--soft`:  Lo que esta en Staging continua ahi.
- `git rm`:
    - `git rm --cached`: Mueve los archivos al estado untracked.
    - `git rm --force`: Mueve los archivos de Git y el disco duro.
- `git checkout`: Traer últimos cambios, volver a versión anterior.
    - `commit file`: Trae un archivo del commit anterior.
    - `rama`: Cambio de rama.
        - `-b`: Cambio y creación de rama.    
- `git config`:
    - `--list`: Lista todas las configuraciones de git.
        - `--show-origin`: Donde estan los archivos.
    - `git config --global user.email "tu@email.com"`: Email del usuario.
    - `git config --global user.name "Tu Nombre`: Nombre del usuario.
- `git diff`: Diferencia de cambios entre archivos. Se puede compara los últimos anteriores o dos commits por sus hash.
- `git clone url`: Clona un repo remoto en local.
- `git merge`: Merge de una rama a otra. Crea un nuevo commit con la combinación de las dos ramas. (Se deben solucionar los conflictos).
- `git branch`: Lista las ramas.
    - `new_branch_name`: Crea una nueva rama.
