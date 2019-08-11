# AWS Cloud Computing
Cualquier producto de AWS que permite ejecutar código propio o ajento.

### EC2
Son máquinas virtuales que nos renta Amazon por segundo. Hay Linux o Windows. Podemos elegir número de CPUs, RAM, discos duros y espacios, tipo de conectividad, entre otras opciones.

##### ¿Qué son los EC2?
- Son máquinas virtuales, llamadas instancias en Amazon que te van a permitir correr diferentes software en diferentes sistemas operativos con diferentes configuraciones.
- Amazon tiene ya unas imágenes preconfiguradas llamadas AMIs .
- Podremos seleccionar diferentes tamaños de CPU´s y su cantidad, cantidad de RAM, espacio en disco, diferente conectividad, entre otros. El costo depende de las capacidades que especifiquemos.

##### Arquitectura de EC2:

Podemos crear diferentes imágenes, por ejemplo una con Ubuntu, configurando o instalando diferentes software, finalmente haciendo una imágen con ello. Las imágenes van hacia una instancia de EC2, seleccionando capacidad que necesitamos en la máquina virtual.
Asociado a esto, están los temas de redes como los grupos de seguridad, los balanceadores de cargas hacia los cuales llega el tráfico de la web externo como interno.
De storage tenemos uno que es efímero que sólo existe mientras la máquina esté prendida, y el otro es un bloque elástico que permanece a pesar de borrar la máquina y de él podemos hacer copias en caso de que vaya evolucionando otro proyecto.

##### Crear una EC2
Cosas a tener en cuenta al momento de crear tu EC2:
- Hay ocasiones en las cuales puedes entrar y no ver tus instancias creadas. Esto puede pasar porque no seleccionaste la región adecuada o la que tenías al momento de crearlas.
- Al momento de crear las imágenes se recomienda usar la de Amazon ya que viene actualizada con los últimos drivers.
- La sección T2/T3 Unlimited en la configuración de la instancia nos sirve si necesitamos mucha CPU o red, al habilitarla, Amazon nos lo dará sin límite. El problema es que tiende a ser más costoso.
- Es muy útil al momento de poner tag que se use uno aunque sea un nombre para recordar para qué sirve la máquina.
- Para conectarnos a la máquina debemos crear una llave. Es importante guardarla en un lugar seguro haciéndole una copia de seguridad ya que si no se tiene la llave, no es posible conectarse por medio de SSH.

##### Imagenes de las instancias
Crear una imagen es muy útil porque cuando quieras crear una instancia nueva, podrás seleccionar la imagen, ahorrándote los pasos de instalación.
Cosas a tener en cuenta al momento de crear imágenes de instancias:
- Creando una imagen te encontrarás con la opción de No reboot, si no se selecciona, Amazon va a apagar nuestra instancia para poder hacer la copia; si se selecciona, la instancia no se apagará, corriendo el riesgo de que pueda salir una copia corrupta. Se recomienda reiniciar la instancia.
- Si estás en producción y la instancia que tienes se quedó corta en capacidades, seleccionarías que no se reinicie, para hacer tu copia y crear una nueva instancia con esta copia.
- Si seleccionaste que sí se reiniciara la instancia, tu IP pública cambiará y no podrás conectarte a tu máquina con la anterior IP.

##### Snapshots y sus operaciones
Cuando creas una imagen, vas a poder reproducir esa instancia con el mismo sistema operativo, software y capacidades, estás haciendo una copia del sistema al completo. Si quisieras hacer una copia de una sola de sus características, por ejemplo el software, ahí es donde usarías un **Snapshot** del volumen que es el disco duro. Esto se hace en situaciones especiales para añadir un volumen a una máquina virtual que ya esté corriendo.
Se recomienda crear una imagen nueva o AMI cada vez que hagas un cambio mayor en la instancia, versionando a través de imágenes para hacer rollback en caso de que el update falle o la configuración sea errónea.

##### Elastic IP's
Cuando reinicies o apagues tu instancia, la IP pública asignada muy probablemente cambiará. En muchos casos esto no es lo deseado y vamos a querer tener una IP que no cambie.
Amazon tiene la solución a este problema ya que nos ofrece el servicio para comprar una IP estática y asignarla a cualquiera de nuestras instancias.

##### Load Balancers
Un Load balancer o balanceador de carga lo puedes conectar a una o más instancias y lo que hace es balancear las solicitudes que le llegan pudiendo generar respuestas de una de las instancias que tiene a disposición dependiendo de su disponibilidad. Puedes balancear peticiones HTTP, HTTPS o TCP con los servicios de AWS.

Cuando creamos un load balancer, podemos ver en sus configuraciones básicas un DNS el cual podemos usar en Route 53 como CNAME para ponerme un nombre de dominio o subdominio.

> Para usar el puerto 443 es necesario agregar un certificado.

##### Marketplace de AMI's
La URL para acceder al marketplace es: https://aws.amazon.com/marketplace
En el marketplace podrás encontrar una gran cantidad de imágenes generadas para crear instancias. Algunas de ellas serán de pago y otras serán gratuitas sólo cobrando por la infraestructura de Amazon.

### Lightsail
Es un producto particular porque es un VPS sobre Amazon similar a Dreamhost o Digital Ocean estando en la red de Amazon conservando los bajos costos de los VPS comerciales.
tiene 3 ventajas:
- Esta sobre la red de Amazon.
- Hay respaldo.
- Bajos costos.

- Es un VPS (Virtual Private Server) como lo es Digital Ocean o el mismo EC2 de Amazon. Tiene una IP pública y un dominio gratis. Su mayor diferencia con EC2 es el precio más bajo.
- Se inicia en segundos.
- Viene con varios templates pre-configurados como LAMP, Wordpress, Magento, etc.
- Su principal ventaja es su costo, bajo y predecible.
- Puedes aumentar o disminuir su capacidad cuando lo quieras, al alcance de un click.
- Puedes usar bases de datos.
- Puedes hacer respaldos como los Snapshots.
- Te ofrece la opción de restauración.
- Puede ser multi-región o multi-zonas (que en la misma zona geográfica tendrás diferentes data centers).

##### Marketplace LS
El marketplace de Lightsail te permite elegir entre Linux y Windows, siendo esta opción la manera más económica de tener Windows de todos los servicios de Amazon.
Puedes instalar el SO más aplicaciones como Wordpress o Node.js; también puedes decidir por inicializar la imagen sólo con el sistema operativo, teniendo muchas opciones en la familia de Linux.
Instalar todos los parches de seguridad o actualizaciones es tu responsabilidad al igual que en EC2.

##### Lightsail vs EC2
Esto es lo que te ofrece Lightsail:
- El costo de los CPUs depende del número que elijas.
- Tienes almacenamiento SSD.
- Te ofrece Networking y transferencia de datos.
- Incluye manejo de DNS.
- Tienes una IP estática asignada a ti.
- Tienes acceso a otros servicios de AWS
- En una comparativa de costos, el plan más económico de Lightsail ofrece por $3.50 1 TB de transferencia mientras que la misma capacidad en EC2 puede salir por más de $90.

##### Bases de datos en lightsail
Las bases de datos en Lightsail también tienen un costo fijo con la disponibilidad que ofrece Amazon.
Cosas a tener en cuenta al momento de crear tu base de datos:
- Lightsail nos ofrece varias versiones de MySQL; si es un proyecto nuevo es recomendado utilizar la más actual. Si es una migración deberemos elegir la versión más cercana a nuestra base de datos existente.
- Lightsail nos propone un password seguro, es recomendable usarlo.
- Puedes configurar tu base de datos de dos maneras:
    - Estándar: Un servidor con una conexión desde afuera.
    - HA: Alta disponibilidad, donde tienes dos servidores o más con un load balance

### ECR
Registrar contenedores.
ECR es el servicio que te permite registrar los contenedores a través de Dockerfiles en Amazon.
Importante antes de registrar contenedores: Tener instalado el AWS CLI y Docker, adicionalmente es importante tener instalado Git.

### ECS
Producto de Amazon para docker.
ECS es toda la infraestructura que te permite correr contenedores de Docker directo en AWS.
Su ventaja es que no debes poner una máquina con Docker donde encima corran los contenedores. Amazon da la infraestructura pre-hecha y nosotros solo elegimos capacidades.
Únicamente se paga por la capacidad solicitada (cCPU, memoria, transferencia de datos).
Puedes escalar tu instancia basada en contenedor de manera manual.
Antes se llamaba fargate.

##### Usos clásicos de ECS
- Microservicios.
- Migración de aplicaciones Legacy al Cloud.

##### Correr contenedor
Cosas a tener en cuenta al momento de correr un contenedor:
- Networking only está basado en un producto llamado AWS Fargate que nos da la infraestructura de Docker sin tener que preocuparnos por las máquinas base y es el que usaremos en este proyecto.
- Es necesario crear una tarea relacionada con la imagen de Docker que creamos anteriormente.

Pasos:
1. Crear cluster.
2. Crear definiciones de tareas.
2.1. Asociar contenedor.

### EKS
Producto de Amazon para Kubernets.
Kubernetes (K8S) se define como un sistema open-source para la automatización de despliegues, el escalado y la gestión de aplicaciones contenerizadas.
- EKS es una implementación de Kubernetes en Amazon que no requiere que coordines nodos maestros y esclavos.
- Te permite crear un ambiente de workers de k8s en AWS.
- Podrás correr contenedores con el dashboard de Kubernetes o cualquier orquestador que quieras usar.
EKS va desde poner el nodo maestro de Kubernetes, poner los workers y ya podrás conectarte a la API para correr tareas.

### Lambda
Es la infraestructura de Amazon para poder correr diferentes funciones.
Lambda es un producto que implementa la filosofía de Serverless, lo cual significa no tener un servidor sino tener funciones que hagan cosas muy específicas (sin embargo sí se usan servidores que administra AWS sin que tú pienses en ello). Es código que puede conectarse a una base de datos, servicios web, etc.
En el mundo clásico se tenía un servidor o grupo de servidores corriendo software y teniendo microservicios. El software internamente resolvía todo y todo consistía en llamadas al mismo código. Con Lambda el enfoque es más de separar las funciones, ponerlas en diferentes servicios y correremos una parte del código en diferentes endpoints.
**Lambda escala automáticamente**, Esto quiere decir que si tu microservicio comienza a usarse más, se te brindarán más recursos para que corra siempre correctamente.
El costo de Lambda es atractivo porque AWS te da 1 millón de llamadas gratis por mes y cuando te excedas de eso, el costo es muy bajo.
##### Lenguajes soportados:
- Node.js (JavaScript)
- Python
- Java
- C#
-Go

##### Configuración de una función en lambda
Cosas a tener en cuenta al momento de configurar una función Lambda:
- La opción de Blueprints se refiere a un documento o plano de lo que vas a hacer.
- Para cada una de las funciones hay que crear un rol que dé acceso a los recursos de AWS que nosotros elijamos. Por default, sólo trae unos permisos básicos. La idea es dar el menor número de permisos posibles.
- Puedes aprender a manejar el CLI https://aws.amazon.com/es/cli/ para otorgar permisos por línea de comandos.
- La entrada de un Lambda es un API Gateway.

### Elastic Beanstalk
Permite correr diversos software o cargas productivas, pudiendo autoescalar hacia arriba o hacia abajo de manera automática.
Elastic Beanstalk es una arquitectura para cuando vas a hacer una entrega a producción de un proyecto web que tengas. Su ventaja es que incluye todo lo que necesitas en un sólo paquete:
- Tienes un Endpoint donde puedes a través de Route 53* edtar tu dominio.
- Puedes tener un Load Balancer
- Tienes instancias EC2 Linux o Windows con soporte a muchos lenguajes.
- Maneja las siguientes plataformas:
    - Docker
    - Go
    - Java SE
    - Java / Tomcat
    - .NET (sobre Windows)
    - NodeJS
    - PHP
    - Otros
Elastic Beanstalk te permite de manera muy fácil hacer un rollback, teniendo una gran flexibilidad para hacer un arreglo.
Esta arquitectura es auto-escalable dependiendo del tráfico o necesidades.

##### Crear ambiente
Cosas a tener en cuenta al momento de crear un ambiente:
- Debemos tener nuestra aplicación en un archivo .zip. Si es la primera vez que usas el comando para crear archivos .zip, debes poner esto en la línea de comandos “sudo apt-get install zip -y”.
- El comando para crear el archivo .zip es “zip -r nombredelzipfile.zip archivos”. - Muchos archivos deberán ponerse de forma explícita como los .env
- En “Version label” es recomendado poner el número de la versión que estamos manejando que nos permite recordar cuando tenemos más archivos y podamos devolvernos en el tiempo a alguna versión en específico si lo requerimos.
