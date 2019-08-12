# Angular JS (1x)
- **Compartir datos entre la vista y el modelo:** Angular da la posiblilidad de usar objetos especiales para hacer esto, el proncipal es $scope, por convencion las variables reservadas para angular empiezan con $ se usa el data binding {{name}} haria referencia a $scope.name
  - ng_model="variable" hace conexion de elementos de la vista con elementos del scope
  - ejemplo de definicion de un modulo de angular:
  - ![image](https://user-images.githubusercontent.com/32855979/62839205-78b25400-bc4c-11e9-80b7-cece653e2264.png)
  - ejemplo uso html
  - ![image](https://user-images.githubusercontent.com/32855979/62839223-be6f1c80-bc4c-11e9-961a-4491bddc00d5.png)
- **Inyeccion de dependencias:** patron de diseño que permite la inversion de control para resolver dependencias, busaca que la clase cliente no sea responsable de las instancias, pasando un objeto como parametro y llamando al objeto.metodo.
  - en angular lo que comienza por $ suele ser un servicio

- **Expresiones e interpolaciones:** 
- ![image](https://user-images.githubusercontent.com/32855979/62841935-3fd9a580-bc73-11e9-97cb-f3de7f043377.png)

- **Filters:**  
- **Custom filters:**   
  - ![image](https://user-images.githubusercontent.com/32855979/62842198-0f473b00-bc76-11e9-91e9-d68720f2e396.png)
  - ![image](https://user-images.githubusercontent.com/32855979/62842250-6ea54b00-bc76-11e9-8b37-08a852c40173.png)
  - ![image](https://user-images.githubusercontent.com/32855979/62842323-e96e6600-bc76-11e9-858e-3568be7b997c.png)
- usando filtros personalizados:   
  ![image](https://user-images.githubusercontent.com/32855979/62842628-f429fa80-bc78-11e9-8eff-c0a2e32691ff.png)
  ![image](https://user-images.githubusercontent.com/32855979/62842774-140dee00-bc7a-11e9-9370-ada3aea07d12.png)
  ![image](https://user-images.githubusercontent.com/32855979/62842794-618a5b00-bc7a-11e9-9a4b-b8a7363cfdd2.png)

- **Digest cycle:**   
![image](https://user-images.githubusercontent.com/32855979/62843430-5be34400-bc7f-11e9-8028-3b756930736a.png)  
![image](https://user-images.githubusercontent.com/32855979/62843648-0c9e1300-bc81-11e9-851b-e25028464ed1.png)
