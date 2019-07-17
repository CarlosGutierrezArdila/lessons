# Terminal y línea de comandos
Todos los comandos permiten agregar banderas y valores a esas banderas.

- `ls`: Listar
    - `-l`: Listar hacia abajo.
    - `-h`: Legible humanamente.
- `pwd`: Working directory.
- `tree`: Arbol de directorios (Sin archivos).
- `.`: Mismo directorio.
- `..`: Directorio padre.
- `~`: Ir al home.
- `cd`: Change directory.
- `mkdir`: Make directory.
- `touch`: Crear archivos vacios, y si el archivo existe cambia la fecha de creación.
- `clear` o `ctrl + l`: Limpia la pantalla.
- `mv filo to`: Mover archivo, usado para renombrar archivos.
- `rm`: Remove
    - `r`: Recursive
    - `f`: Force
- `man command`: Manual
- `cp file to`: Copy
- `pushd`: Navegar a un directorio recordando donde esta.
- `popd`: Navegar a anterior directorio de `pushd`
- `open`: Abre archivo en interfaz gráfica, el sistema operativo escoge el programa.
    - `-a` escoger el programa
- `more file` o `less file`: Ver más de un archivo.
    - Adelanta con `espacio`.
    - Avanza una linea con `enter`.
    - Regresa con `b`.
- `cat`: Concatenar y mostrar archivos.
    - `cat > file`: Crear archivo y darle contenido.
- `tail`: Para ver las ultimas lineas de un archivo, por defecto son las últimas 10.
    - `-#`: Muestra las # últimas líneas.
    - `-f`: Muestra ultima linea y lo sigue. Follo.
- `which`: Donde esta el binario de ese ejecutable.
- `echo`: Imprimir en consola.
- `alias`: Crear un alias para una lista de comandos. Todos los parametros.
```bash
alias ll='ls -lh'
```
- `>`: Enviar salida a file. Si ya existe lo escribe desde 0.
    - `1>salida 2>error`: Manda uno a la salida y los errores a error.
    - `1>todo.log 2>&1`: Mandaa todo al mismo archivo.
- `>>`: Concatenar archivo.
- `<`: Mandar como entrada.
- `top`: Ver lista de procesos.
    - **pid**: Proccess id.
- `kill`: Matar proceso.
    - `-9`: Por completo y sin preguntar.
- `&`: al final de un comando lo manda al background. 
- `^C`: Terminar proceso.
- `;`: Separa comandos para ejecutar los en una linea.
- `ps -wA`: Lsita sin interacción de los procesos que se están ejecutando.
    - `| wC -l`: Word count lines en una linea.
    - `| grep cadena`: Busca por una cadena.
- `wc`: Word count.
    - `-l`: Para que cuente lineas
- `uptime`: Cuanto tiempo lleva prendido el pc.
- `grep`: Busca una cadena de caracteres, con expresiones regulares, dentro de un nodo de un arbol.
    - `-r`: Recursivamente.
    - `-e`: Buscar expresión.
    - `-n`: Linea del archivo donde se encuentra la expresión.
    - `-v`: Excluye.
    - `-i`: Case insensitive.
- `find`: Busca, dentro del directorio que le digamos, nombres de archivo.
```bash
find . -name *.html -type f #encontrar todos los archivos HTML
find . -type d #encontrar todos los directorios
find . -type d | wc -l #encontrar y numerar todos los directorios
find . -name *.html -type f > resultados #mandar el resultado de la busqueda a un archivo llamado resultados
```
- `date`: Fecha
```bash
#Para medir tiempos
date; grep -r . -e expression; date 
```
- `time`: Tiempo de procesador.
- `curl`: Emula los request de un browser. 
    - `>`: Para guardar salida.
    - `-o`: Para guardar lo.
- `zip`: Comprimir archivos.
- `unzip`: Descomprimir archivos.
    - `-v`: Virtual.
    - `-vl`: Lista todos los archivos de un zip.
- `tar`: Juntar y comprimir.
    - `cfz`: Create file zip.
    - `xfz`: Extract file zip.
- `awk`: Comando para procesar datos en texto.
    - `-F`: Para formato de columnas
```bash
awk -F "::" '{printf("%s\n", $2)}'
awk -F "::" '{printf("%s - %s\n", $3, $2)}'
```
- `|`: Pipe: Ayuda a anidar operaciones, permite que el standard output de un comando se convierta en el standard input del otro.
- `du`: Disk usage.
    - `-h`: Human readable.
    - `-d #` o `--max-depth #`: Profundidad. 
- `whoami`: Quien soy yo.
- En un archivo se usa el `#!binfile` Para indicar quien quiero que ejecute.
```bash
#!/user/local/bin/php
```
- `sudo`: Superuser do.

### Variables y entorno
Las variables se referencias con `$`.
```bash
echo $PATH
```

### Steams
- **STDIN**: Standard Input.
- **STDOUT**: Standard Output.
- **STDERR**: Standard Error.

### Crontabs
Permite programar la ejecución de diferentes tareas. Con crontab podemos agendar todo lo que necesitemos para facilitar nuestro trabajo y automatizar tareas.
Cada una de las primeras 5 columnas que tenemos al correr este comando especifica en qué momento exacto queremos que se ejecute la tarea que vamos a definir en la sexta columna. Permise usar comentarios con `#`.
- Columna 1: minuto 0-59

> Columna 1
> 1
> 1,10,18 // Permite listas
> */5 // Cada vez que sea entero se ejecuta (cada 5 minutos)
> 1-10 Los primeros 10 minutos de cada hora
> * Todos los minutos

- Columna 2: hora 0-23
- Columna 3: día del mes 1-31
- Columna 4: mes 1-12
- Columna 5: día de la semana 0-7 (donde 0 y 7 equivalen a domingo)
- Columna 6: script o comando que queremos que se ejecute

```bash
crontab -l #Lista las tareas
crontab -e #Edita las areas agendadas.
```

#### Links simbolicos
Para ahorrar disco duro podemos crear links simbólicos o alias, con `ln -s`.
> ls -s file_or_folder name
> rm name # borra el alias

Los links duros al ser borrados borran el contenido también.

### Usuarios y permisos
Con ls -lh podemos ver la información de un archivo con sus permisos, esto nos dice: 
> -rw-r--r-- 1 beco staff 2.9M Apr 11 17:45 file
Donde:
- Primera columna indica:
    - `-` -> File.
    - `l` -> Link.
    - `d` -> Directory.
- Permisos:
    - Sea asignana permisos para
        - Primera terna **OWNER**.
        - Segunda terna **GROUP**.
        - Tercera terna **ANYONE**.
    - Donde:
        - `r`: Read. **En octal 4**.
        - `w`: Write. **En octal 2**.
        - `x`: Execute. **En octal 1**.
    - Entonces en binario:
        |   Binario |   Octal       | Gráfico       | Permisos                          |
        |-----------|---------------|---------------|-----------------------------------|
        |   000		|		0		|		---		| Sin permisos.                     |
        |   001		|		1		|		--x		| Sólo permiso de ejecución.        |
        |   010		|		2		|		-w-		| Sólo permiso de escritura.        |
        |   011		|		3		|		-wx		| Permisos de escritura y ejecución.|
        |   100		|		4		|		r--		| Sólo permiso de lectura.          |
        |   101		|		5		|		r-x		| Permisos de lectura y ejecución.  |
        |   110		|		6		|		rw-		| Permisos de lectura y escritura.  |
        |   111		|		7		|		rwx		| Todos los permisos.               |

- Dueño del archivo.
- Grupo al que pertenece el usuario.
- Tamaño.

Para modificar permisos
- `chmod`: Cambia permisos.
- `chown`: Cambiar owner.

Para ver lista de usuario:
- `cat/etc/passwd`

Para crear usuarios
- `useradd [opciones] name`
    - `-g`: Gripo principal.
    - `-m`: Crear carpeta home si no existe.
    - `-d`: Carpeta home del usuario.
    - `-s`: Interprete de comandos (shell).
- `passwd`: Para cambiar la contraseña. 

Para grupos:
- `cat /ect/group`: Ver los grupos.
- `groupadd name`: Agregar un grupo.
- `usermod -a -G group user`: Agregar un usuario al grupo.
- `usermod -g group user`: Retirar a los usuarios y agregar lo a uno nuevo. 
- `deluser user group`: Elimina a un usuario del grupo.
