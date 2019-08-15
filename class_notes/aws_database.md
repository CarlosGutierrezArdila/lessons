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

