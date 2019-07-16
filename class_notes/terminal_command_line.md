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

### Variables y entorno
Las variables se referencias con `$`.
```bash
echo $PATH
```

### Steams
- **STDIN**: Standard Input.
- **STDOUT**: Standard Output.
- **STDERR**: Standard Error.
