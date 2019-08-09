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
- Durabilidad: 99.9999999999%+
- Diseñado para ofrecer disponibilidad: 99.5%
- SLA de disponibilidad: 99%
- Zonas de disponibilidad:1
- Cargo mínimo de capacidad por objeto: 128 KB*.
- Almacenamiento: 0.01 USD/GB
- Solicitudes PUT,COPY,POST o LIST: 0.01 USD por cada 1000 solicitudes.
- GET, SELECT y el resto de solicitudes: 0.001 USD por cada 1000 solicitudes. 
4. **Glacier**
Backup o data historica. Glacier solamente será utilizado para backups y data histórica, el precio de almacenamiento por GB es sumamente menor siendo el más económico. Al ser data histórica la disponibilidad de la información es menor, siendo que pedimos la información una vez cada seis meses o cada año.
- Durabilidad: 99.9999999999%
- Diseñado para ofrecer disponibilidad: N/D
- SLA de disponibilidad: N/D
- Zonas de disponibilidad: >= 3 
- Cargo mínimo de capacidad por objeto: N/D
- Almacenamiento: 0.004 USD/GB
- Solicitudes PUT,COPY,POST o LIST: Varian
- GET, SELECT y el resto de solicitudes: Varian

**Glacier estandar:** 3 a 5 horas.
**Glacier expedited:** Descarga de 1 a 5 minutos
**Bulk:** 5 a 12 horas.

##### Ciclo de vida en S3
Esta funcionalidad va a mover la información de una clase de almacenamiento a otra cada que pase cierto tiempo. No tendrá la misma frecuencia de accesibilidad un archivo de hace 1 año que uno de hace una semana, por ello el ciclo de vida nos será de utilidad para disminuir los costos de nuestros archivos.

El mínimo de tiempo para pasar objetos a S3-IA es de 30 días. Asimismo, deben pasar 120 días para mover la información a Glacier.

> Amazon S3 -> Amazon S3 IA -> Amazon Glacier

Configurar en `Lyfecicle`

##### EStrategias de migración a la nube
1. **AWS SNOWBALL**: Jobs para importar o exportar datos a Amazon S3, Caja en la que se pone la información. Peta.
2. **AWS SNOWMOBILE**:  Carga de archivos en gran cantidad usando uncontenedor en un camón semitrailer. Hexa.
3. **CARGA MULTIPARTE**: Dividir archivoen pequeñas partes y cargar esas partes en paralelo.
- Con SDK
- Con AWS Cli.
4. **TRANSFERENCIA ACELERADA**,

En S3 el tamaño máximo es de 5 TB, pero por put son 5GB.

##### Casos de uso de S3.
- EMR: Procesamiento de información.
- GLUE: Servicios de ETS de AWS.
- ATHENA: SQL queres sobre data y no estructurada en S3.
- Macie Dashborad: Alertas sobre cosas que pasen en los buckets.

##### Seguridad en S3 - AWS
1. **Protección de datos mediante cifrado**
1.1. **Server Side Encryption**: 
1.1.1. **SSE-S3**: AWS Genera la llave, con la lalve seencripta la data, la llave es encriptada con una Encripting key. La llave encriptada y la data encriptada son guardadas en s3.
- AWS Se encarga de administrar las llaves de cifrado.
- Usa Advvance Encryption STandard 256 bits.
- Las llaves son guardadas en IAM. (AWS/s3).
1.1.2. **SSE-KMS**: Key management service. Plaintext, se pasa por KMS y se cifra. El usuario crea la llave, define quien peude usarla y administrarla y es almacenada por Amazon.
- LLaves, La llave se ccrea en IAm y se especifica quien puede administrar la y usarla.
- Integrado con cloudtrail para ver uso de las llaves.
- Rotación de las llaves es responsibiliad del usuario.
1.1.3. **SSE-C**: El usuario genera sus llaves y se las da a amazon, se apsa la información de la clave se pasa a traves de los encabezados.
- AWS se encarga del cfado.
- SOlo por solicitudes HTTPS.
- La rotación de las llaves es responsabilidad del usuario.
1.2. **Client side Encryption**.

2. **Politicas de S3**:
Es un control de seguridad, usuarios o roles niveles accesos bajo que tipo de condiciones. Son documentos json. Componentes:
- Statement: Obligatorio, contiene varios elementos.
- Versión: Reglas de sintaxis de lenguaje, Opcional.
- Sid: Identificador de la politica. Opcional.
- Valores: Allow o Deny, Obligatorio.
- Principal: Especifica usuario o rol. Obligatorio.
- Condition: Opcionales.
    - IpAddress: aws_SourceIp: desde que ip.
    - NoIpAddress: aws_sourceIp: desde que ip no.

En las politicas se le pueden dar permisos a otras cuentas.

2.1. **ACL de Bucket**
Permisos a nivel de cuentas.
Crea una ACL por defecto con permisos sobre el propietario.  

##### Storage Gateway
Intermediaro entre infra onpremise y la nube. Conexión entre lo local y nube.  Almacenamiento hibrido con integración onpremise optimizadopara transferenciade datos.
Se usa para Backup, Archiving, Disaster recovery, y Cloud Data Processing.
- Protocolos: Utiliza protocolos como NFS, SMB y iSCSI.
- Integración: S3, EBS, lGlacier.
- Uso: Descargar e instalar una VM, configurar la y usarla.
- Seguridad: Brinda todas las ventajas de seguridad y durabilidad que provee AWS.
Tipos:
1. **File Gateway**: Permite que aplicaciones on-premise accedan a storage a traves de SMB o NFS. 
La dataes cacheada en el File Gateway y convertida en objetos de S3. Es a nivel de archivos.
2. **Virtual Tape Library**: Reemplaza el bacckup en cintas aprovechando el cloud, Backup existente es generado directametne desde on-premise en virtual tape.
3. **Volume Gateway**: Crear cache de archivos locales. Mejora la latencia de archivos locales. 
Crear snapshots locales en AWS. Estos backups son cargados son asincronamente en AWS.

##### EFS - Elastic File System
Unidad de almaccenamiento que brinda un endpoint, se pueden conectar muchas instancias al mismo.
- Pricing: Valor es por GB consumido, no aprivisionado.
- uso: Aumento y reducción automática de su capacidad.
- Funcionalidad: Concede acceso compartido paralelo masivo a miles de isntancias Amazon EC2.
- IOPS: Permite altos niveles de IOPS (Inputs Outputs Per Second).
- Red: Permite mejor rendimiento de red.
- Funcionalidad: Permite cifrado en reposo.
- Compatibilidad: Solo es compatible con sistemas operativos Linux.
- Compatibilidad: Usanndo direct connect, EFS puede ser utilziado desde On-Premise.
- Montaje: Provee un  paso a paso de montaje.

**Casos de uso**: Instancias con Auto Scalling.

##### EBS - Elastic Block Storage
Se paga por Storage Aprovisionado.
- Repicación: Cada volumen se replica dentro de una AZ para proteger ante unerror.
- Diseño:: Para ayudar a diferentes cargas de trabajo.
- Montaje: EBS solo se peude asociar a uan isntancia de EC2.
- Boot: No se pueden encriptar y no permiten todos los tipos EBS disponibles.
- Volumen Adicional: Puede encriptarse y usar todos los tipso de EBS disponibles.
- Montaje: Se peude hacer por la AWS o por la CLI.
- Proteción: Se puede proteger el borrado accidentar al crear la isntancia.
- Limites: Pueden ser hasta 16 TB.
- Tipos: Hay diferentes tipos.
    - SSD GP2: General Purpousse. Cargas de aplicaciones con un uso normal.
    Balance entre performance y precio.  3 IOPS por cada GB hasta 10000 IOPS. Son de uso general.
    Hasta 3000 IOPS para periodos cortos debajo de 1GB.
    Pueder ser Root de una isntancia.
    Entre 1GB y 16 TB.
    - SSD IO1: Diseñados para I/O Intensiva.
    Se usan para más de 10.000 IOPS. Hasta 20000 IOPS por volumen.
    Para BD no relacionales o uso intensivo I/O.
    Puede ser Root de una instancia.
    Entre 4 GB y 16 TB.
    - HDD ST1: Big Data, Datawarehouse, Log Process o Streaming. No pueden ser Boot de una ECT. Entre 500 GB y 16 TB.
    - HDD SC1: Volumen de menor costo para cargas de acceso con poca frecuencia. No puede ser un boot de una EC2. Escenarios donde el costo es importante. Entre 500 GB y 16 TB.

**Snapshots y AMI**:
- Son incrementales.
- Se pueden programar con el lyfecicle manager (Funciona a nivel de tags). 
- Compatiiblese con cualquier sistema operativo.

