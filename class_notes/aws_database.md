# AWS Database 

### RDS
RDS (Relational Database Service) es un servicio de AWS enfocado a bases de datos relacionales con compatibilidad a 6 motores de bases de datos: 
- Amazon Aurora
- MySQL: Bases de datos ilimitadas por instancia.
- MariaDB: Bases de datos ilimitadas por instancia, optimizadapara queries.
- PostgreSQL: Bases de datos ilimitadas por instancia, plugins adicionales
- Oracle: Una base de datos por instancia, su propia licencia.
- Microsoft SQL Server: 30 basesde datos por instancia.

Cada uno con sus características, integraciones y limitaciones.

Entre sus características principales podemos destacar los backups automáticos con un tiempo de retención de hasta 35 días, es decir, si encontramos algún problema con nuestras bases de datos podemos restablecerlas a la hora, minuto y segundo que necesitemos dentro del periodo de retención. Recuerda que por defecto este periodo es de 7 días. También tenemos la opción de hacer backups manuales, podemos tomar snapshots manuales en cualquier momento si nuestra aplicación lo necesita. Además, AWS por defecto tomará un snapshot final de nuestras bases de datos antes de eliminarlas, así podremos restablecerla si tenemos algún inconveniente.

Todas las bases de datos relacionales utilizan un sistema de almacenamiento, si la carga de lectura y escritura son constantes, el sistema General Purpose funciona muy bien, sin embargo, podemos utilizar el sistema Provisioned Storage cuando requerimos de altas cantidades de consumo y operaciones de disco.

RDS es un sistema completamente administrado, esto quiere decir que AWS reduce nuestra carga operativa automatizando muchas tareas de nuestra base de datos, por ejemplo, las actualizaciones. A nivel de seguridad contamos con muchas opciones, una de ellas es la posibilidad de encriptar nuestra base de datos para que solo nosotros y las personas o roles que especifiquemos tengan acceso.

También tenemos integración con otros servicios de AWS, por ejemplo, IAM para administrar a los usuarios, roles, grupos y políticas de conexión a la base de datos por medio de tokens con máximo 20 conexiones por segundo (recomendado para escenarios de prueba), o la integración de Enhanced monitoring para hacer monitoreo en tiempo real nuestras bases de datos (recuerda que además de subir el precio, no está disponible para instancias small).

Se pueden permitir reglas desde otro grupo de seguridad.

##### Estrategias de Backup
Los sistemas de backup manuales de RDS son completamente nuestra responsabilidad y debemos determinar cuándo tomar estos snapshots. Recuerda qué estos estos backups son incrementales, pueden mantener la información incluso cuando borramos la base de datos y nos permiten migrar la información entre diferentes regiones.

Por otra parte, los backups automáticos se hacen a diario, pero las operaciones de entrada y salida pueden quedar suspendidas por algunos segundos. Para solucionar este problema, es recomendado trabajar con despliegues Multi-AZ, que nos permiten utilizar una instancia de reserva de la base de datos cuando la instancia principal no se encuentra disponible.

El precio de nuestros backups depende de dos cosas: la retención (el tiempo que tenemos disponibles nuestros backups, máximo 35 días) y la cantidad almacenamiento que utilizamos (storage).

Los backups se pueden mantener después de la elimincación de la base de datos.

Al restaruar la base de datos se pueden cambiar las ocnfiguraciones.

##### Performance en RDS

**Monitoreo**
A nivel de monitoreo, AWS nos provee un servicio llamado CloudWatch que nos permite visualizar los niveles de lectura, escritura, CPU, disco y memoria de la instancia dónde corre nuestra base de datos, también podemos analizar las métricas de conexiones para determinar la carga y la concurrencia de nuestras instancias.
- Cantidad de conexiones.

**Replicas de Lectura**
La primer estrategia para mejorar el performance son las replicas de lectura, copias asíncronas de nuestra base de datos principal con un nuevo endpoint que vamos a utilizar solo en tareas de lectura, así obtenemos mucha más disponibilidad para tareas de escritura en nuestra base de datos principal. 
Recuerda que este servicio no esta disponible para los motores de Oracle y SQL Server.


**Provisioned**
También podemos mejorar el storage de nuestra base de datos utilizando provisioned iops para soportar altas operaciones de entrada y salida sobre la base de datos, principalmente para transacciones OLTP (OnLine Transaction Processing).
1000 a 40000 IOPS.

**Otras**
Existen otras alternativas como las bases de datos en memoria (ElastiCache, por ejemplo).
Cache de la data más consultada, se tienen dos opciones: Memcache y Redis (Depende de casos de uso: Almacenamiento de datos, HA y replicación).
Estas opciones resultan muy útiles para guardar la información más consultada en cache, así aliviamos un poco la carga de nuestra base de datos principal. Si estamos muy saturados y agotamos todas las opciones para mejorar el performance, la recomendación es dividir nuestra base de datos en otras más pequeñas.
- Performance Insights: Monitoreo de performance y buenas prácticas de bases de datos. Cuando y que acciones tomar, reocmendaciones.
- Adicionales: Estrategias dependiendo del motor. AWS recomiendo Aurora.

##### Despliegue Multi AZ
El servicio de Multi AZ nos permite aumentar la disponibilidad de nuestro servicio realizando despliegues de nuestra base de datos en diferentes zonas. Cuando nuestra base de datos principal tenga problemas de disponibilidad, AWS automáticamente conectará nuestra aplicación con la base de datos replica en la segunda zona de disponibilidad. Recuerda que el precio de este servicio es equivalente a tener 2 bases de datos.
- Incrementan la disponibilidad de la BD. 
- Recomendadas  para producción.
- Se compone de n Master Standby.
- Replicaicón sincrona.
- Failover Automático.
- Conmutación por error.
- Replica entre AZ.
- Pricing como tener 2 BD.
- Backups se hacen de BD Standby.

##### Estrategias de migración a RDS
DMS (Database Migration Service) es un servicio de AWS que nos permite migrar nuestras bases de datos con otros motores al servicio de RDS u otros servicios de bases de datos en AWS.

Este servicio tiene las siguientes características:

- Podemos realizar migraciones de bases de datos on premise o en la nube a los servicios de bases de datos en AWS sin afectar el downtime de la base de datos que vamos a migrar.
- La carga de trabajo durante las migraciones es adaptable.
- Solo pagamos por los recursos que utilizamos en la migración.
- AWS administra la infraestructura necesaria para el trabajo de la migración, Hardware, Software, parches, etc.
- Conmutación por error automática, si AWS detecta un error en el proceso automáticamente creará una nueva instancia para remplazar la anterior, así el proceso de replicación no se ve afectado por estos problemas.
- Los datos en reposo están cifrados con KMS (Key Management Service) y la migración utiliza el protocolo de seguridad 

Hay las siguientes:
- Source Endpoint
- Replication instance (Replication task)
- Target Endpoint

**Migraciones Homogenea**
Los dos motores son iguales.
Las migraciones homogéneas son migraciones donde la base de datos de origen y la de destino puede tener diferentes versiones del mismo motor, o son bases de datos compatibles entre sí (MySQL y Aurora, por ejemplo).
**Migraciones Hetereogeneas**
Los dos motores son diferentes.
También podemos realizar migraciones heterogéneas, donde la base de datos de origen no es compatible con la de destino. Estas migraciones NO siempre son posibles, y antes de realizar la migración vamos a necesitar convertir el esquema de la base de datos con la herramienta ``AWS Schema Conversion Tool`.

**Origen y Destino compatibles:**
-  Oracle 10.2
- SQL Server 2005
- MySQL 5.5
- DB2 9.7.
- SAP ASE 12.5
- DynamoDB
- Aurora DB
- Maria DB
- PostgreSQL 9.4
- Mongo DB 2.6.x
- DB Azure.
- Redshift (Data warehouse de AWS).
- S3.

### Aurora
Aurora es el motor de base de datos más robusto de AWS a nivel relacional. Entre sus características encontramos que AWS garantiza que utilizar Aurora nos asegura un performance 5 veces superior a MySQL y hasta 3 veces superior a PostgreSQL. También soporta hasta 64 TB de almacenamiento y 15 réplicas de lectura con niveles de latencia inferiores a 10 ms.

Cuando creamos una base de datos Aurora, realmente creamos un cluster de bases de datos compuesto por una instancia maestra y múltiples réplicas de lectura, todas desplegadas en diferentes zonas de disponibilidad dependiendo de la región que estamos utilizando.
- Aurora es el motor de bases de datos relacional más robusto en AWS.
- Desarrollado por AWS.
- El performance es 5 veces mas rápido que MYSQl y 3 veces más rápido que PSQL.
- Ideal para ambientes de producción.
- Compatible con MYSQL y PSQL.
- Soporta hasta 64 TB de storage.
- Hasta 15 replicas de lectura.
- Monitoring y failover en menos de 10 ms.
- Aurora crea un cluster de las BDs en diferentes zonas de disponibilidad dependiendo de la región.

##### Caracteristicas de Aurora
Además de ser una base de datos muy potente y robusta, Aurora nos permite un nivel de customización muy alto, puede crecer hasta 64 TB y nuestra data esta replicada en múltiples Az. Tiene 3 endoints:
1. El endpoint de nuestra instancia principal nos permite conectarnos a la base de datos maestra y especificar las solicitudes de lectura y escritura.
2. Endpoints para cada una de las replicas de lectura 
3. Endpoint a nivel de instancia que nos provee control sobre cargas de trabajo de la instancia principal y sus replicas, pero AWS nos recomienda NO utilizar este último endpoint de instancia.

Otras características de Aurora:
- **Autoreparación:** Guardar la información de la parte dañada en otra parte del disco y reparar el problema automáticamente.
- **Cache Warm:** Hacer un precalentamiento de la caché al iniciar las consultas más comunes y sus resultados.
- **Recuperación de accidentes:** Si falla la instancia principal, Aurora promueve una réplica de lectura o crea una nueva instancia principal.

#### Aurora Serverless
Hasta el momento, la única base de datos relacional autoescalable que encontramos en el mercado es Aurora Serverless, una base de datos donde podemos seleccionar la mínima y máxima capacidad por instancia, a medida que la concurrencia sobre la base de datos va creciendo, esta capacidad mínima se incrementa hasta la capacidad máxima que nuestra aplicación debe soportar. Gracias a esto el precio de nuestros servicios disminuye, solo pagamos por el tiempo y la capacidad que realmente utilizamos.

Compatible solo con MYSQL 5.6

Tiene funcionalidad con warm pool of DB Capacity. Percalentar las instancias para crecer en tiempos de 5s.

### Dynamo DB
Amazon service para bases de datos no relaciones.
es el servicio para bases de datos NOSQL de AWS completamente administrado (AWS se encarga de todo el background para que nosotros trabajemos nuestra aplicación), compuesto de varios nodos y distribuido en varias regiones (altamente disponible con replicación en diferentes locaciones), es una base de datos de baja latencia con almacenamiento en caché y es completamente escalable sin downtime de nuestra aplicación.

Este servicio se basa en dos conceptos importantes: las unidades en lectura (RCU, 4kb de bloques por segundo) y las unidades de escritura (WRU, 1kb de bloques por segundo). Con base en estos dos parámetros se determina el costo de nuestras bases de datos y el autoescalamiento.

La unidad fundamental de DynamoDB son las tablas, que están compuestas por items, que están compuestos por atributos (por ejemplo, la tabla trabajadores está compuesta por, trabajadores, cada uno con su nombre, edad, identificación y toda su información). También debemos entender los conceptos de partition key (llaves primarias para el espacio de almacenamiento) , sort keys (para organizar y ordenar la información) y local and global secondary index (otros atributos que podemos utilizar junto a las partition keys u otros atributos para obtener información más especifica y con mejor rendimiento).

###### Caracteristicas
- No relacional.
- Totalmente administrada.
- Compuesta de varios nodos.
- Distribuida en varaisregiones.
- Baja Latencia.
- Almacenamiento en cache.
- Completamente escalable.

##### Consistencia
La consistencia eventual de lectura NO puede mostrar los resultados de una tarea de escritura reciente cuando consultamos una tabla recién actualizada, además, consume los 4kb de bloques por segundo en las unidades de lectura.

Por otra parte, la consistencia fuerte de lectura funciona correctamente cuando consultamos una tabla y recibimos la respuesta más reciente, pero consume el doble que la consistencia eventual, así que será más costosa. Este tipo de consistencia es el adecuando para aplicaciones y casos de uso muy específicos donde la consulta y la escritura deben estar tan sincronizadas como sea posible.

##### Casos de uso
El servicio de DynamoDB es muy útil en los siguientes casos:
- Aplicaciones móviles
- Internet de las cosas (IoT, gracias al real time y su capacidad para ingesta de información)
- Aplicaciones Web
- Gaming (gracias a su alta disponibilidad, conexión y por ser no relacional)
- Manejo de sesiones
- RealTime (ya que no solo nos permite almacenar nuestra información, también podemos utilizar toda la data en tiempo real para alimentar otros servicios y generar otras arquitecturas)

##### Indices y particiones
Cuando utilizamos DynamoDB los datos se almacenan en particiones, al crear una tabla, la base de datos asigna su partición para que esta pueda satisfacer el desempeño aprovisionado, y en ciertas ocasiones puede aumentar el tamaño y la cantidad de particiones para mejorar el desempeño o cuando la partición está llena. El limite de las particiones es 10GB de almacenamiento, pero también necesitamos cambiar de partición cuando superamos los niveles de lectura y escritura (3.000 RCU y 1.000 WCU).

DynamoDB utiliza las claves principales simples y compuestas para almacenar y recuperar nuestros elementos y almacenar nuestra información con la función de hash. Cuando utilizamos claves compuestas debemos especificar los valores de la clave para leer los elementos, y el orden de los elementos depende de su clave de ordenación.

La base de datos esta optimizada para distribuir nuestros elementos de forma uniforme entre las particiones de una tabla, con independencia del número de particiones que configuramos. Sin embargo, la recomendación oficial es elegir una clave de partición con un amplio abanico de valores diferentes, es decir, claves tan aleatorias como sea posible en relación con el número de elementos de la tabla, así evitamos que la información se guarde en particiones cercanas o iguales para optimizar las tareas de lectura y escritura de la base de datos.

Para claves compuestas el elemento se almacena en una partición determianda por la clave, el elemento queda en la partición espeificada anteriormente de acuerdo  a la clave de ordenación, para leer el elemento se deben especificar los valores de su clave compuesta.


##### Operaciones
- **SCAN**: se encargan de escanear por completo nuestras tablas para examinar todos sus elementos y comprobar si presentan los valores solicitados, pero son muy poco eficientes ya que utilizan bastantes unidades de lectura y aumentan los costos de nuestra base de datos, debemos evitar estas operaciones para tablas grandes.
AWS nos recomienda realizar operaciones pequeñas a lo largo del tiempo en vez de hacer una sola operación muy larga, también podemos configurar límites de tamaño para evitar los escaneos completos y duplicar nuestras tablas para realizar estas operaciones sobre tablas no principales y no afectar su rendimiento. 

- **QUERY**: (operaciones de consulta) nos permiten buscar elementos en cualquier tabla o índice secundario en base a su clave principal compuesta para optimizar la petición.
En vez de escanear toda la tabla (como en las operaciones Scan), vamos a especificar los criterios de búsqueda utilizando una expresión de condición clave (una cadena que determina los elementos que vamos a leer en la tabla o el índice), especificamos el nombre y valor la clave de partición como una condición de igualdad, podemos realizar consultas utilizando diferentes operadores para encontrar los resultados con mejor precisión.
También podemos limitar el número de elementos que esperamos en los resultados para agilizar las operaciones, pero no obtenemos información tan detallada de la capacidad de lectura que consumimos.

##### Streams
Streams nos proporciona una secuencia ordenada por tiempo de cambios de los elementos de cualquier tabla, es decir, guarda los cambios de nuestros elementos para que podamos procesar y consumir esta información, podemos ampliar el poder de DynamoDB con replicación entre regiones, análisis continuo con integración a Redshift, notificación de cambios y muchos otros escenarios.

Estos streams capturan una secuencia en orden cronológico de las modificaciones de los elementos de una tabla y almacenan la información por 24 horas. Cada registro de secuencia contiene la información sobre una sola modificación a los datos de un elemento de la tabla. Nuestras aplicaciones pueden obtener acceso a este registro y ver los elements de datos tal y como se encontraban antes y después.

##### DynamoDB Accelerator DAX
DAX (DynamoDB Accelerator) es un cluster de caché completamente administrado por AWS y de alta disponibilidad para DynamoDB con un rendimiento de hasta 10 veces superior (de milisegundos a microsegundos) y soporta millones de solicitudes por segundo.

Entre sus características encontramos la encriptación en reposo, podemos utilizar hasta 10 nodos y se puede seleccionar la zona de disponibilidad donde se desplegará el cluster. Podemos utilizar instancias small y medium para cargas de prueba, de resto todas son de tipo R (optimizadas en memoria).



