#  Functions, Methods, and Interfaces in Go
## parametros
parametro, en la definicion de la funcion func f(a,b) { }  
argumento en el call f(3,4)
## retornos
![image](https://user-images.githubusercontent.com/32855979/66011908-8afd8100-e48a-11e9-9c55-cd91d089e721.png)  
![image](https://user-images.githubusercontent.com/32855979/66011998-eaf42780-e48a-11e9-8ffd-a488a870f32f.png)  
## call by value, reference
call by value opera con copias de los argumentos, no los afecta  
![image](https://user-images.githubusercontent.com/32855979/66012088-49210a80-e48b-11e9-8b67-bba20c043dff.png)
call by reference, pasando un puntero como argumento  
![image](https://user-images.githubusercontent.com/32855979/66012184-c77dac80-e48b-11e9-8ca6-0b04892b08a3.png)  
de esta manera se altera el dato en esa direccion de memoria.  
## arrays y slices
![image](https://user-images.githubusercontent.com/32855979/66012456-e16bbf00-e48c-11e9-94ab-6b1fba32c6fb.png)
## First class values
tratar una funcion como un tipo, variables creadas dinamicamente para pasarse como argumentos y retornarse. 
## Funciones como retorno
![image](https://user-images.githubusercontent.com/32855979/67166943-f768f300-f359-11e9-8c2c-73e27c828438.png)
## Variadic and deferred
- definir una funcion con numero variable de argumentos:
operador **...** . 
- ![image](https://user-images.githubusercontent.com/32855979/67166990-7100e100-f35a-11e9-8e05-8247451102a8.png) 
- ![image](https://user-images.githubusercontent.com/32855979/67167020-b4f3e600-f35a-11e9-8b48-43e1db5dc110.png) 
- deferred functions: las funxiones no se llaman hasta que la funcion que las rodea termina su ejecucion: 
los argumentos del defer se evaluan donde se define, no cuando se llama. 
## clases y encapsulamiento
- no hay palabra class en go, se usan receiver types: 
- ![image](https://user-images.githubusercontent.com/32855979/67167237-11580500-f35d-11e9-8d90-1b5bb34d8c21.png) 
## soporte para clases
- los datos se exportan por medio de los metodos para encapsular los datos de un paquete, go maneja la exportacion con mayusculas
## interfaces
- ![image](https://user-images.githubusercontent.com/32855979/67167827-7ca4d580-f363-11e9-8984-585ff8f1d56a.png)
- ![image](https://user-images.githubusercontent.com/32855979/67169507-4bcb9d00-f371-11e9-9399-3312edbed207.png)
- ![image](https://user-images.githubusercontent.com/32855979/67169554-91886580-f371-11e9-88a6-0537ffbec8dd.png)






