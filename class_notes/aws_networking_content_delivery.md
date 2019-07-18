# Network y Content Delivery con AWS
AWS tiene muchsos servicios. Tiene funcones de optimización a nivel de red. Permite tener infraestructura y escalar la.

### Arquitectura de AWS
Tres grupos grandes de componentes:
1. Clientes: Hacen peticiones a internet que van a los dns y osn ruteados a los endpoints. 
1.1. Mobile Apps.
1.2. Web Sites.
1.3. Web Serviles.
2. API Gateway: Lugar público al que te puedes conectar desde puertos HTTP o HTTPS y pedir contenido. Internamente esta información se va a un dispositivo de cómputo o servidor dentro de Amazon como instancias EC2, funciones Lambda, entre otras. Puede tener conectado:
- Cache.
- CloudWatch.
3. Servicios de Amazon: Servicios que pueden ser accesibles desde un endpoint, como:
- Lambda.
- EC2.
- Otros.

### VPC (Virtual Private Cloud) - Red privada virutal
Seguridad del sistema, mantener en privado los reccursos.
AWS permite crear una red virtual quue contiene todos los recursos por fuera de internet, estos recursos pueden conectarse entre si y además de esto puede ser expuesto a internet (Se puede poner una ip publica, etc).
Todo lo que esta en VPC tiene dos direcciones una privada (Interna) y otra pública (Ver Grupos de seguridad).
Un VPC funciona así:
Tienes por un lado cualquier dispositivo conectado a internet, el cual se conecta a la red de AWS y a su vez dentro de esta red, viven diferentes VPC (Puedes tener varias VPC en tu cuenta).
Importancia de un VPC:
- Se pueden asignar IPs estáticas “internas” de manera gratuita.
- Se puede asignar una dirección IPv6 tanto al VPC como a instancias, aunque la más usada es la versión IPv4.
- Se puede asignar múltiples IPs a una instancia, con la posibilidad de comprar por un bajo precio una IP elástica (siempre será la misma)
- Cambiar los grupos de seguridad en vivo.
- Control fino sobre el tráfico saliente.
- Controles de seguridad extras a nivel de red (ACLs - Network Access Control List).

Cosas a tener en cuenta al momento de crear un nuevo VPC:
- Amazon te da IPs versión 4 que normalmente funcionan, pero si estás trabajando en Asia o tu proyecto te lo exige, puedes seleccionar IPs versión 6.
-  Puedes establecer qué tipo de zona quieres. Esto es importante a tener en cuenta porque en algunas ocasiones puedes no encontrar algo en tu cuenta y puede deberse a que no tienes bien configurada la zona y ésta se cambió por alguna razón.
- Para servicios gratuitos, deja Hardware tenancy en default puesto que el servicio dedicado tiene un costo.

Cosas a tener en cuenta al momento de crear una instancia EC2 interna:
- Es aconsejable seleccionar el servidor de Ubuntu porque está muy soportado y también porque es un feature gratuito.
- Podemos crear múltiples IPs para la misma VPC.
- Importante guardar la key en un lugar seguro que recordemos porque la vas a necesitar a futuro.
- Una EC2 interna tendrá una IPs privada, lo que significa que no se puede acceder a ella desde afuera.

##### Jumpbox
Un Jumpbox te permite tener acceso a los VPC’s que hayas creado, ya que éste tiene una IP pública que podrás usar para conectarte desde afuera.
Cosas a tener en cuenta al crear y usar un Jumpbox:
- Para conectarnos a nuestro Jumpbox vamos a usar un software que usa SSH llamado MobaXterm. Hay muchos otros que puedes usar para este propósito.
- Al momento de especificar el username, en el caso de las imágenes virtuales AMI de Amazon el usuario deberá ser ec2-user

### CloudFront
Red de distribución internacional de contenido. Acelerador de entrega de contenido web. Implementación de CDN de Amazon.
CloudFront tiene diferentes centros de replicación intentando cubrir gran parte del globo. Para América del Sur, tenemos un centro en Brazil. Tiene como característica que se sincronizan rápidamente.
En el caso de un archivo de video, funcionaría de la siguiente manera: El archivo es enviado a un Storage S3 y pasaría a un conversor de archivos AWS Elemental MediaConvert que crearía copias del archivo con diferentes tamaños y calidades. Después de ésto, se notifica a CloudWatch que redirecciona de nuevo a los Amazon S3 en las diferentes locaciones.
El tener diferentes archivos es muy útil porque dependiendo de la conexión y dispositivo del cliente, Amazon enviará la respuesta de archivo adecuada para que el streaming nunca se entrecorte.
Características de CloudFront:
- **Economico:** No hay contratos, no hay pagos por adelantado. Te cobran por lo que se consumió.
- **Fácil de administrar:** ya que puedes simularlo con instancias EC2 en distintas regiones lo cual implica un desarrollo completo.
- Se **soporta cualquier tipo de archivo** que pueda ser compartido por un servidor web.
- **SLA:** CloudFront garantiza ciertos niveles de calidad en la distribución de contenido.
- **SEGURO:** Es muy seguro ya que el contenido va sobre HTTPS.
- Podrías enviar código lambda para que puedas tener cierto código dinámico en cualquier parte del mundo.


##### CDN - Content Delivery Network
Es una red de servidores en el mundo con copias de un sitio. (Evitar latencia de red). 
Permite repartir cualquier tipo de archivos.
Una CDN es una red de distribución de contenido que crea réplicas del archivo en diferentes partes del mundo, dependiendo de tus necesidades y las áreas geográficas que debes cubrir.

### Route 53
Servidor de nombres de AWS.
Route 53 es el servicio de Amazon de nombres de dominios donde puedes no solo configurar los dominios que ya tengas, sino comprar, crear subdominios, cambiar un dominio a diferentes implementaciones, entre otras opciones disponibles.
Funciona así: Cuando tienes un nombre de dominio o subdominio, éste apunta a algún endpoint de Amazon como un balanceador de carga y de ahí irá a algún proyecto específico como EC2 o un contenido HTTP.
Usos de Route 53:
- Servidor de nombres.
- Registro de dominios con precios competitivos para el mercado.
- Alta disponibilidad en dominios, teniendo servidores con pesos, definiendo cuál es tu servidor principal y dándole prioridad a éste. También puedes decidir a qué servidor dirigir a un usuario dependiendo de su localización.


##### DNS - Domain Name System 
Utiliza ipv4 e ipv6. Toma el nombre de dominio a una dirección ip.
Se debe establecer que servidor va a responder.
> Pc -> Servidor DNS Proveedor de Internet (Puede guardar en cache) (Retorna dirección) ->  Servidor de DNS (Retorna dirección).

##### Configurar el dominio
Cosas a tener en cuenta al momento de configurar un dominio:
- La primera vez que registres un dominio en Amazon, va a tardar bastante, así que planea con anticipación.
- La primera entrada en nuestro dominio NS es la que necesita Amazon para decirle a internet que él es el servidor de dominio para ese dominio en particular.
- La entrada SOA es un registro de revisión de servicio.
- La entrada A son nuestros subdominios o dominios que creamos.
- Cuando creamos un subdominio tenemos varias opciones en Type; las más usadas son IPv4 que significa que podremos la dirección IP del dominio y CNAME es el alias de Amazon de nuestro recurso.

##### Configurar contenido estatico
Cuando se configura contenido estatico el nombre del bucket debe ser el mismo del nombre del dominio o subdominio.

### API Gateway
Una dirección pública que conecta con tu servicio de backend interno.

Un API Gateway es un endpoint público abierto a internet que recibe peticiones de tipo HTTP. Si se pide algún contenido que anteriormente se haya resuelto, se regresará la versión disponible en caché; sino se conectará con algún sistema como una instancia EC2, lambda, etc.
Cuando algo no está en caché el API Gateway lo notará y redireccionará a través de Route 53 llevando a diferentes servicios como funciones lambda, servidores EC2 o elastic beanstalk.

Existen diferentes arquitecturas para un API Gateway:
- Tenemos un cliente web que se conecta a la API Gateway de Amazon lo cual podría ir a un Load Balancer dependiendo de tu configuración y por último llegaríamos a la infraestructura de Docker.
- El usuario estando en su dispositivo o una API, realiza la petición al API Gateway (si existe en caché se regresa directamente al usuario), envía a una función lambda que procesa lo que deba procesar y por último ésta se conecta con una base de datos. Una vez se tiene la información, se regresa al API Gateway y por último al usuario.
- El usuario pide todo el contenido estático a Amazon S3, sin embargo si es algo dinámico, se pide al API Gateway, que va a lambda finalmente consultando a la base de datos.


##### Endpoint
En un punto de contacto entre un servicio (Servidor, Grupo de servidores, ...) y el internet.
Son versionables, por medio de argumentos de la llamada o de adminsitración.
Permite:
- Cambiar implementación.
- Versionar.
- Cambiar infraestructura.

### Recetas
- Hosting S3, Dommionio Route 53: Configurar con CNAME.
- Hosting S3 a EC2, editando el dominio de EC2: Poner IP Pública.
- ELB en una sola VPC con App y DB: Agregar base de datos despues de crear el Elastic Beanstalk.
- Api Gateway + Servidor EC2: Usar un endpoint de tipo proxy a la dirección ip de la instancia.
- CloudFront para sitio estatico: 