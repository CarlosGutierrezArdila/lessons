# Conceptos fundamentales
## Scope
- tiempo de vida en el que existe una variable
- **Global scope** objeto window
- **Function scope:** dentro de la funcion los argumentos hacen parte de un nuevo scope
let define la fucnion para el block scope
- **Module scope:** <script type="module"> limita el alcance al archivo, necesario usar el **export** en el archivo
## Closures:
- combinar el scope con funciones
- las funciones de ejecucion inmediata evitan que lo que se defina adentro de ellas este disponible en el scope global:
- ![image](https://user-images.githubusercontent.com/32855979/64040882-9d02a180-cb23-11e9-99d8-85ee35d442f3.png)
- los closures permiten tener variables privadas
- ![image](https://user-images.githubusercontent.com/32855979/64041281-b0fad300-cb24-11e9-9f70-bf8a4a1f74a9.png)
- en el ejemplo del contador no se puede modificar la variable count, se logra que sea privada por medio del retorno de las funciones y el aislamiento del scope
## This
- **en el global scope:** this es window
- **funcion:** es window excepto en el strict mode:
```js
'use strict';
``` 
- this es el que esta llamando un fragmento de codigo
- **Dentro de class:** cuando se instancia con la palabra new se refiere a la instancia
## Metodos call, apply y bind
- this no se puede asignar directamente
### call 
- se le pasa el this por medio del metodo de la funcion, cualquier funcion tiene estos metodos 
-  ![image](https://user-images.githubusercontent.com/32855979/64042643-f076ee80-cb27-11e9-9123-d0ab8c5d3d1a.png)
### apply 
- hace la misma funcion que call pero los argumentos son diferentes, los argumentos van en un arreglo:
```js
f.apply(this, [a,b,c])
``` 
### Bind 
- construye una nueva funcion, con el this que se le pasa ya integrado

## Prototype

- todas las funciones tienen un .prototype que en principio es vacio
- new saca cosas de prototype, es un atajo para object.create
  - se usa this dentro de la funcion y el return this es implicito:

## Herencia prototipal
- se heredan los prototipos, se pueden ver con Object.getPrototypeOf() 
- JS busca las propiedades en los prototipos padre
- Object es el padre de todos los objetos de js, incluyendo funciones.
# Funcionamiento de JS
## Parsers y Abstract Sintax Tree

- ![image](https://user-images.githubusercontent.com/32855979/64047500-90d31000-cb34-11e9-82d4-e807af143be0.png) .
- ![image](https://user-images.githubusercontent.com/32855979/64047695-1e166480-cb35-11e9-954f-409a9260d484.png) -
- ![image](https://user-images.githubusercontent.com/32855979/64047792-66358700-cb35-11e9-85ac-baaf65428768.png) .
## JS engine
- tratar de que las funciones se ejecuten igual para que el optimizador las haga machine code y sean rapidas
## Event loop
- stack es organizado y heap es aleatorio 
- ![image](https://user-images.githubusercontent.com/32855979/64048640-e361fb80-cb37-11e9-93b9-caf8b7cd3899.png)
- pasar del task queue al stack
- las promesas estan en la cola de microtareas y se les da preferencia.

# Fundamentos intermedios
## promesas.
- se pueden reemplazar por async await, por ejemplo:
```js
async function f() {
data = await fetch(url) //promesa
return data
}
```
- toda funcion async retorna promesa
- **Promise.all([promesas])** resuelve una arreglo de promesas, si una falla todas fallan.
- **Promise.race([promesas])** devuelve la primera promesa que se resuelve.
## getters y setters.
- permite tener propiedades virtuales
- palabras reservadas get y set
- tener propiedades que no existen directamente, ejemplo un calculo

# Fundam Avanzados
## Proxy.
- feature reciente de JS
- palabra reservada proxy
```js
const b= new Proxy (target, handler)
```
- el proxy tiene muchas maneras de implementar interceptores
## Generadores:
- se declaran con un * despues del nombre de la funcion, se pueden parar y detener, mediante la palabra reservada **yield** y el metogo gen.next()
- ![image](https://user-images.githubusercontent.com/32855979/64058171-d8758e00-cb6c-11e9-931b-cf3548917b39.png)
- el yield puede recibir un parametro por medio del next
- ![image](https://user-images.githubusercontent.com/32855979/64058231-d95aef80-cb6d-11e9-83e2-55d73ceb4180.png)
 
# APIS del DOM
# Typescript
# Patrones de diseño
