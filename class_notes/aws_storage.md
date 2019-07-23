# Storage en AWS

### S3
Almacenamiento de objetos.
S3 es almacenamiento de objetos como archivos, PDF’s, imágenes, etc. Dentro de S3 contamos con diferentes tipos de almacenamiento:
- S3 Standar
- S3 IA: Acceso poco frecuente.
- S3 IA One Zone
- Glacier

Dependiendo de la clase de S3 va a variar la durabilidad y disponibilidad.
Es un servicio Global.

##### Bucket
Bucket es la unidad donde vamos a almacenar la información en S3, su identificador se encuentra compuesto por la región donde fue creado, la dirección de Amazon AWS y el nombre del bucket. Para los casos cuando queramos acceder a un objeto simplemente se le suma el nombre del objeto, este debe ser único, en minúsculas y no se permiten los caracteres especiales salvo _ y -. El nombre de un Bucket debe ser único a nivel global.
- **Identificador para Bucket**
En virginia puede que no apareza la región puesto que esta es la default.

>https://`region`.amazonaws.com/`bucket_name` 

- **Identificador para Objeto**
El nombre debe ser totalmente único. No mayusculas y no caracteres especiales.
>https://`region`.amazonaws.com/`bucket_name`/`object_name`

- **Identificador para web estatica**
>https://`bucket_name`s3-website-`region`.amazonaws.com

##### Versionamiento
Al momento de ir añadiendo varias versiones de un archivo AWS va a poner un tag al último archivo para tener claro que es esta la última versión. Es importante tener en cuenta que la característica de versionamiento te va a cobrar por el almacenamiento total de tus archivos, es decir la última versión y todas sus versiones anteriores.
Se usa el tag `latest` para indicar el último.
Se cobra por el almacenamiento total.

##### Sitios Web Estáticos
Podremos utilizar nuestro propio dominio como en cualquier sitio web estático, para ello usaremos Route 53 que es el servicio encargado de la parte de DNS y gestión de dominios en S3.
En los sitios web estáticos debes tener en cuenta que:
- El dominio deberá llamarse igual al bucket.
- Los archivos index y error deben ser públicos
- Debe ser configurado con el servicio Route 53

Para probar el archivo error se puede hacer borrando el archivo index.

##### Logs en S3 
Object level Loginen S3.Funciona con CloudTrail, que registra todas las llamadas del API. Se puede:
- Guardar en otro bucket.
- Enviar logs a CloudWatch (Desde cloudtrail).

##### Transferencia Acelerada
Tomando ventaja del servicio de CDN de AWS podemos cargar nuestra información de forma más rápida, esta característica no se encuentra disponible en buckets que contengan puntos (.) en su nombre.
La transferencia acelerada te será sumamente útil cuando tengas que subir información a tu bucket, pero tú no te encuentres en la misma región donde creaste tu bucket.

##### Eventos en S3
Los eventos nos servirán en los casos donde queremos recibir notificaciones cuando se ejecute determinada acción dentro de un bucket con información importante.
Al momento de crear un evento debemos ponerle un nombre, indicarle la acción que debe notificar, además podemos especificarle la carpeta y el tipo de archivo. Por último, debemos indicarle hacia donde debe mandar la notificación, puede ser hacia:
- SNS Topic.
- SQS Queue.
- Lambda Function.

##### Replicación en S3
La característica de replicar información se realiza solamente para buckets de una región a otra, no es posible pasar de un bucket de una misma región a otro de la misma.
El proceso de replicación se realiza de forma asíncrona. Es común realizar réplicas para Data Recovery, Auditorías y Compliance.
Al momento de replicar la información podemos indicarle que sean todos los objetos del bucket, los objetos que se encuentren dentro de determinada carpeta o aquellos que tengan cierto tag. Además, podemos replicar objetos encriptados.

##### Clases de Storage
1. **S3 Estandar**
- Durabilidad: 99.9999999999%
- Diseñado para ofrecer disponibilidad: 99.99%
- SLA de disponibilidad: 99.9%
- Zonas de disponibilidad: >=3
- Cargo mínimo de capacidad por objeto: N/D.
- Almacenamiento: 0.023 USD/GB
- Solicitudes PUT,COPY,POST o LIST: 0.005 USD por cada 1000 solicitudes.
- GET, SELECT y el resto de solicitudes: 0.0004 USD por cada 1000 solicitudes. 
2. **S3 IA**
S3 Infrequent Access o de acceso poco frecuente está diseñado para almacenar objetos que son accedidos con menor frecuencia que S3 Estándar, su costo de almacenamiento es menor, pero el costo de solicitudes es mayor. Una o dos veces por mes.
- Durabilidad: 99.9999999999%
- Diseñado para ofrecer disponibilidad: 99.99%
- SLA de disponibilidad: 99%
- Zonas de disponibilidad: >=3
- Cargo mínimo de capacidad por objeto: 128 KB*.
- Almacenamiento: 0.0125 USD/GB
- Solicitudes PUT,COPY,POST o LIST: 0.01 USD por cada 1000 solicitudes.
- GET, SELECT y el resto de solicitudes: 0.001 USD por cada 1000 solicitudes. 
3. **S3 IA única zona**
Es para acceso poco frecuente, similar a S3-IA, pero con la diferencia de que solamente se encontrará en una zona de disponibilidad y tiene un costo menor en almacenamiento por GB.