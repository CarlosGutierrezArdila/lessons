# Git
Un sistema de control de versiones como Git nos ayuda a guardar el historial de cambios y crecimiento de los archivos de nuestro proyecto.

En realidad, los cambios y diferencias entre las versiones de nuestros proyecto pueden tener similitudes, algunas veces los cambios pueden ser solo una palabra o una parte específica de un archivo específico. Git está optimizado para guardar todos estos cambios de forma atómica e incremental, o sea, aplicando cambios sobre los últimos cambios, estos sobre los cambios anteriores y así hasta el inicio de nuestro proyecto.

### Ciclo básico de trabajo
`git init` crea dos cosas:
- **Carpeta .git (Repositorio):** Base de datos del proyecto.
- **Area enmemoria RAM `Staging`:** Guarda temporalmente archivos.

##### Estados de un archivo:
- **Tracked:** Solo archivos que estan en git, no tienen cambios pendientes y sus últimas actualizaciones han sido guardadas.
- **Staged:** Archivos que estan en `Staging`. Los cambios no se han guardado definitivamente.
- **Unstaged:** Archivos cuyos  cambios no se encuentran en el `staging` aún.
- **Untracked:** No  estan en el entorno de git.
Se puede dat el caso en que dos archivos esten en dos estados a la vez en **Staged** y **Untracked** cuando se guardan cambios en el staging y luego se vuelven a hacer cambios.

### Comandos
- `git init`: Inicia repo
- `git add`: Agrega un archivo. Este comando no almacena las actualizaciones de forma definitiva, solo las guarda en algo que conocemos como “Staging Area".
    - `-A`: Agrega todos lso archivos.
- `git commit`: Guarda los cambios definitivos. 
    - `-m`: Agrega mensaje al commit.
    - `-a`: Agrega todos los cambios.
- `git push`: Mandar repo a un servidor remoto.
    - `--tags`: Sube los tags.
    - `:refs/tags/tag_name`: Borrar tag remoto.
- `git fetch`: TRae los cambios pero no lo copia en los archivos.
- `git pull`: Traer cambios de un repositorio remoto (Fusiona fetch y merge).
- `git status`: Status de la base.
- `git show`: Cambios historicos hechos.
- `git log`: Todos los cambios.
    - `filename`: Cambios en un archivo.
    - `--oneline`: Log en una linea.
    - `--start`: Cambios especificos en cada archivo.
    - `-all`: Todos los cambios.
    - `--graph:` Grafo.
    - `--decorate`: Decora la salida.
    - `--stat`: Ver estadisticas.
    - `-S word`: Número de veces que se utiliza la palabra o coincidencias.
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
    - `-l`: Listar configuraciones.
- `git diff`: Diferencia de cambios entre archivos. Se puede compara los últimos anteriores o dos commits por sus hash.
- `git clone url`: Clona un repo remoto en local.
- `git merge`: Merge de una rama a otra. Crea un nuevo commit con la combinación de las dos ramas. (Se deben solucionar los conflictos).
- `git branch`: Lista las ramas.
    - `new_branch_name`: Crea una nueva rama.
    - `-r`: Ver ramas remotas.
    - `-a`: Ver todas las ramas.
- `git remote`:
    - `add origin`: Agregar origen remoto
    - `-v`: Listar origenes 
    - `set-url origin url-ssh-del-repositorio-en-github`: Cambiar url de origen.
- `git tag`: Crear tags asociados a un hash o listarlos.
    - `-a`: Agregar nombre.
    - `-m`: Agregar mensaje.
    - `-d`: Para borrar tags.
> `git tag -a v.0.1 -m "mensaje" hash`    
- `git show-ref`:
    - `--tags`: Tags y hash asociados.
- `git show-branch`: Muestra las ramas.
    - `--all`: Todo.
- `gitk`: Verseión visual.
- `git reflog`: Para ver todo el historial incluso lo borrado.
- `git grep word`: Busca en los archivos la palabra. Usar comllas.
    - `-c`: Contar las coincidencias.

### Comandos adicionales
Para un entorno colaborativo
-  `git shortlog`: Log por persona.
    - `-sn`: Personas que han interactuado.
    - `--all`: Todos los commits
    - `--no-merges`: No incluye merges.
- `git config --global alias.name "comando"`: Configurar comandos en el entorno de git.
- `git blame`: Quien hizo que, sobre un archivo.
    - `-L init,fin`: Desde lina init hasta fin.
- `git command --help`: Ayuda de un commit

### Alias
crear alias para comandos
> alias alias_name="command"

### Pull request
De github. Para revisión de código.

### Fork
Para clonar el repo en mi cuenta.

### Gihub pages
Host gratuito de github.
Si el nombre del repo es **username.github.io** se muestra ese repo como raiz.

### Git rebase
Recoger todos lso cambios confirmados en una rama y ponerlos sobre otra.
> Se considera una mala práctica.

```console
# Cambiamos a la rama que queremos traer los cambios
git checkout experiment
# Aplicamos rebase para traer los cambios de la rama que queremos 
git rebase master
```

### Git stash
PAra guardar cambios en memoria y recuperar los despues.
- `git stash`: Guarda los cambios.
- `git stash list`: Lista los cambios en memoria.
- `git stash pop`: Para sacar los cambios.
- `git stash branch name`: Pone los cambios en una nueva rama.
- `git stash drop`: Elimina los stash.
- `git stash apply`: Aplica lso cambios.
    - `git stash apply stash@{2}`: Aplica el grupo de cambios.

### Git clean
Borrar archivos no agregados, que no sean carpetas y que no estan en el ignore.
- `gitt clean --dry-run`: Para saber que archivos se van a borrar.
- `git clean -f`: PAra borrar todos lso archivos lsitados que no son carpetas.

### Git cherry-pick
Para traer un commit viejo de otra rama a mi rama actual.
> `git cherry-pick  hash-commit`

###  Amend
Remendar el cambio, pegar cambios al commit anterior
- `git commit --amend`: Remendar cambios.

### .gitignore
Para ignorar archivos en git.
> `!` agrega excepciones.
### Configurar llaves ssh
##### Cifrado asimetrico
Cifrado con llaves públicas y privadas.
La forma de hacerlo es la siguiente:
1. Ambas personas deben crear su llave pública y privada.
2. Ambas personas pueden compartir su llave pública a las otras partes (recuerda que esta llave es pública, no hay problema si la “interceptan”).
3. La persona que quiere compartir un mensaje puede usar la llave pública de la otra persona para cifrar los archivos y asegurarse que solo puedan ser descifrados con la llave privada de la persona con la que queremos compartir el mensaje.
4. El mensaje está cifrado y puede ser enviado a la otra persona sin problemas en caso de que los archivos sean interceptados.
5. La persona a la que enviamos el mensaje cifrado puede usar su llave privada para descifrar el mensaje y ver los archivos.

Puedes compartir tu llave pública pero nunca tu llave privada.

##### Configurar llaves
1. **Generar llaves SSH**: 
> ssh-keygen -t rsa -b 4096 -C "tu@email.com"

2. **Agregar url del repo**:
> git remote set-url origin url-ssh-del-repositorio-en-github

3. **Agregar llave ssh en github.**

