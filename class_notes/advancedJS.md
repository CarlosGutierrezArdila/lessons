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
![image](https://user-images.githubusercontent.com/32855979/64041281-b0fad300-cb24-11e9-9f70-bf8a4a1f74a9.png)
- en el ejemplo del contador no se puede modificar la variable count, se logra que sea privada por medio del retorno de las funcioines y el aislamiento del scope

# Funcionamiento de JS
# Fundam intermendios
# Fundam Avanzados
# APIS del DOM
# Typescript
# Patrones de diseño
