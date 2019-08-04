# Variables 

```javascript
//RESUMEN DE LA CLASE : 'VARIABLES'
// -- Por convencion, ahora y en adelante en la mayoria de los casos ya no
//    utilizara el punto y coma(;) al final de cada linea.

var nombre = 'Fernando' , apellido = 'Huaman'// Se pueden definir la existencia
//   y el valor de cada variable con tal de que este separado por comas (,).

var edad = 18// Se define la existencia de la varaible 'edad' cuyo valor
// asignado es igual a  18.

console.log('Tengo ' + edad ) // En la consola te debe aparecer 'Tengo 18'.

edad ='18 años'// El valor de la variable edad sera reemplazada a '18 años'.

console.log('Tengo ' + edad ) // Ahora en la consola te debe aparecer el texto
// con el valor de la variable actualizada como un string.

console.log('Hola ' + nombre + ' ' + apellido) // Se utiliza ' + ' para unir
// 2 o mas cadenas de texto y recordemos que el 'console.log' desplega en la
// consola de la web aquella informacion que queremos que sea visible

var peso = 75// En el codigo la variable 'peso' tiene un valor (numero)  de  75
// Este valor puede ser cambiado desde la consola de la web con solo poner
// ' peso = "75kg" ' ---> de esta manera la variable , por dentro, ya tendria un
//  numero sino un string.

```

# Strings

```javascript

// RESUMEN DE LA CLASE : 'STRINGS'
// - Nos quedamos con una de las lineas escritas en la clase anterior
// - Recordar que no hay necesidad de comas (,) en la mayoria de los casos
// - Recordar que cada vez que escribimos texto dentro de comillas(' ') el
//   espacio tambien es contado como un tipo de letra que es imvisible.
var nombre = 'Fernando' , apellido = 'Huaman'

// - Si queremos que la cadena de texto que tiene cierta variable este todo en
//   mayusculas , entonces , usaremos la funcion 'toUpperCase()' que tiene como
//   estructura ---> "  nombreDeVariable.toUpperCase()  " . Ejemplo:
var nombreEnMayusculas = nombre.toUpperCase()

// - Ahora si queremos que la cadena de texto que tiene cierta variable  este
//   todo en minusculas , entonces, utilizaremos la funcion 'toLowerCase()' que
//   tiene como estructura ---> "  nombreDeVariable.toLowerCase()  " . Ejemplo:
var apellidoEnMinusculas = apellido.toLowerCase()

// - Si queremos que una de las letras , de acuerdo a su posicion (0,1,2,3,...),
//   sea extraida de una cadena de texto que esta contenida en una variable
//   , entonces, utilizaremos la funcion 'charAt()' que tiene como estructura
//   ---> "  nombreDeVariable.charAt(posicion)  " .
// - Recordar que en una cadena de texto , los valores de las posicones siempre
//   empiezan con el numero cero (0).  Ejemplo:
var primeraLetraDelNombre = nombre.charAt(0)     // F e r n a n d o
                                                 // 0 1 2 3 4 5 6 7

// - Si queremos extraer una cadena de texto que este limitada entre dos posiciones
//   , entonces, utilizaremos la funcion ' substr() ' que tiene como estructura
//   ---> "  nombreDeVariable.substr( posicion_inicial , posicion_final )" .
//   Ejemplo:
var str = nombre.substr(1,2)  // F e r n a n d o
                              // 0 1 2 3 4 5 6 7

// - Si queremos saber la longitud de nuestra cadena de texto ('texto'),entonces,
//   utilizaremos la propiedad ' length ' que tiene como estructura
//   ---> "  nombreDeVariable.length  " . Ejemplo:
var cantidadDeLetrasDelNombre = nombre.length

// - Por ultimo, en la clase anterior podiamos concatenar 2 o mas cadenas textos
//   Gracias al operador ( + ). Ejm: ---> var nombreCompleto = nombre + ' ' + apellido
//   Pero actualmente existe la " interpolacion de texto " que tiene como estructura
//   ---> ` ${nombreDeVariable1} ${nombreDeVariable2} .... `.
// - Como veran se ha utilizado el simbolo dolar( $ ) , los corchetes ( {} ) y lo
//   mas importante que son las comillas imvertidas ( ` ` ) que dentro de ellas
//   puedes escribir el texto que tu quieras ya dando los espacios que quieres
//   que aparezca.
// - Ademas, dentro de los corchetes cambiar la cadena de texto usando funciones
//   Ejemplo:
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
//                             |
//                             |
//                             |
//                             V        
//                         (espacio)

```
# Numeros

```javascript
// RESUMEN DE LA CLASE: 'NUMEROS'
// - Declaramos la existencia de la variable 'edad' cuyo valor definido es igual
//   a 18
var edad = 18

// - Si queremos aumentar en una unidad al valor de la variable 'edad' hay 3 formas
//   de hacerlo:
//   ---> edad = edad + 1 (forma especifica)
//   ---> edad += 1 , ---> edad++ (formas abreviadas)
edad+=1

// - Declaramos la existencia de la variable 'peso' cuyo valor definido es igual
//   a 75
var peso = 75

// - Luego, Restamos 2 porque segun el contexto que dio el profesor, la persona
//   bajo de peso. Nos podemos ayudar de una de las formas abreviadas:
peso-=2

// - Declaramos la existencia de la variable 'sandwich' cuyo valor definido es
//   igual a 1.
var sandwich = 1

// - El valor de esta variable se suma al nuevo valor de peso porque segun el
//   contexto que dio el profesor, la persona subio de peso por comer un sandwich
peso +=sandwich

// - Declaramos la existencia de a variable 'jugarAlFutbol' cuyo valor definido
//   es igual a 3
var jugarAlFutbol = 3

// - El valor de esta variable se resta al nuevo valor de peso porque segun el
//   contexto que dio el profesor, la persona perdio peso por jugar futbol
peso-=jugarAlFutbol

// OTRO EJEMPLO:
// - Se declara la existencia de la variable 'precioDelVino' cuyo valor es igual
//   a 200.3
var precioDelVino= 200.3

// - Como se ha comprado 3 botellas de vino , declaramos una variable Total cuya
//   ecuacion es igual '   precioDelVino*3  ' , pero como la memoria reserva muy
//   poco espacio para los decimales  por lo que seria mejor usar :
var total = Math.round(precioDelVino*100*3)/100
// - La funcion que cumple ' Math.round() ' es la de redondear un numero decimal

// - Ahora si queremos que despues del numero entero aparezca solamente un total
//   de decimales que quieres, entonces, utilizaremos ' toFixed()' que tiene Como
//   estructura ---> "   nombre_De_Variable.toFixed( numero_de_decimales )   "
//   Ejemplo:
var totalStr=total.toFixed(3)
// - Recordar que despues de usar dicha funcion lo que va a regresar va a ser una
//   cadena de texto y no un numero entero.
// - Si queremos que vuelva a ser un numero y que se mantenga los decimales, entonces,
//   utilizaremos la funcion ' parseFloat() '
var tota2 = parseFloat(totalStr)

// ULTIMO EJEMPLO
// - Declaramos  la existencia de 2 varaibles ('pizza' y 'personas') cuyos valores
//   son 8 y 2 respectivamente
var pizza = 8
var persona = 2

// - Si queremos saber cuantas pizzas debe comer cada persona, debemos realizar una
//   division
var cantidadDePorcionesPorPersona =pizza / persona
``` 
# Objetos

- cuidado con el this en las arrow functions, va a ser lo que este en el scope de afuera, window por defecto
![image](https://user-images.githubusercontent.com/32855979/62418741-7e011480-b636-11e9-8eb1-6f88e639dfe9.png)

## Herencia en prototipos

- **herencia prototipal:**  sintaxis class y extends, simplificar asignacion de prototipos ES6+ 
![image](https://user-images.githubusercontent.com/32855979/62418841-bbff3800-b638-11e9-8a93-acd1847f506a.png) 

