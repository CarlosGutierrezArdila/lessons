# Fundamentos AWS Cloud
### Computo en la nube

En AWS el cómputo en la nube trata de los siguiente:
- Sitios Web, una sola computadora corriendo un solo stack de programación cómo LAMP, XAMPP, entre otros.
- Respaldos y recuperación, incluso de sistemas operativos completos.
- Archivos Permanentes, también puedes guardar archivos estáticos como fotografías o documentos.
- DevOps, no solo tenemos automatización en el release de los proyectos, también cuentas con alta disponibilidad o respaldos automatizados en diversos lugares del mundo.
- Análisis Masivos
- Cómputo Serverless, en lugar de preocuparte por la cantidad de computadoras o cómo y cuándo va a escalar tu servicio puedes programar tu aplicación con microservicios mientras que AWS se encarga de darte los elementos necesarios.
- Cómputo de Alto Rendimiento, levanta tus servidores sólo cuando tu aplicación lo necesita.
- Internet of Things.
- Aplicaciones Empresariales.
- Distribución de media.
- Servicios móviles.
- Cómputo científico.
- E-commerce.
- Ambientes Híbridos: Diferentes lugares.
- Blockchain.

Ventajas de AWS:
- Cero inversión inicial, muchos servicios son gratis el primer año.
- Usa lo que necesites, apaga lo que no.
- Crece tanto como sueñes.
- Velocidad cuando la necesitas.
- Si no lo usas, no lo pagas.
- Cobertura mundial.

### Elastic Beanstalk
Esta arquitectura tiene como ventaja la alta disponibilidad y la eficiencia para atender una gran cantidad de usuarios.

Elastic Beanstalk es una plataforma donde en pocos pasos, obtienes un balanceador de cargas y tantas instancias EC2 como tu quieras.
Este ambiente puede escalar de manera dinámica de acuerdo al tiempo de respuesta a los usuarios, uso de CPU, uso de RAM, etc.
Esta herramienta soporta los siguientes ambientes:
- Docker Image
- Go
- Java SE
- Java con Tomcat
- .NET + Windows Server + IIS
- Nodejs
- PHP
- Python
- Ruby

### S3
Almacenamiennto en la nube. Reposiitorio de archivos rápido perfecto para uso de una aplicación a la hora de manipular y almacenar datos.
S3 permite realizar respaldos muy rapidamente en otras regiones de AWS.

### Glacier
Almacenamiento historico.

### ASG
Auto scaling groups, crecen o desminuyen de acuerdo a la carga.
### Elastic Load Balancer
Recibir clientes Http y https con el certificado que se decida.
Se puede crear un certificado en Amazon que sea válido en la mayoria de los dispositivos.
### Route53
Administrador de DNS
### EC2
- *Updates:* Manuales
- *Instancias:* Maquinas virtualizadas.
- *Seguridad:* Generación de llaves únicas.
- *Espacio:* Espacio en disco virtualmente infinito.
- *Redundancia:* Copias de seguridad en diversas regiones.
- *Firewall:* Desde donde y por donde se puede conectar a la máquina.
- *Direcciones IP Estaticas:* Comprar ip pública estatica.
- *Respaldos:* Respaldar toda la máquina.
- *Escalable:* Incrementar o decrementar los recursos de la máquina.
- *Migración de snapshots:* Coppiar snapshots a otras regiones.
- *Grupos de seguridad:* Accesos a la máquina por direcciones.

Permisos de la pem chmod +600

### Serverless
Sin necesidad de servidores

### Lambda 
Relacionado al concepto de serverless permite ejecutar código sin necesidad de que corra un servidor, es administrado por amazon.

Siempre se debe definir un `lambda_handler` o *handler*.

##### Limites
- *Memoria:* Mínima de 128MB, máxima 3000MB con incrementos de 64MB.
- *Límites de ejecución y espacio:* Puedes correr tu aplicación hasta 300 segundos y tienes un /tmp limitado a 512MB.
- *Ejecución paralela:* Esta limitada a 1000 ejecuciones concurrentes (a un mismo tiempo), no tiene límite en ejecuciones secuenciales (una detrás de otra).

##### Ventajas de Lambda:
- *Seguridad:* Al ser una infraestructura compartida, no tienes que preocuparte de seguridad: AWS maneja todo.
- *Performance:* AWS está monitoreando constantemente la ejecución de tus funciones y se encarga de que siempre tenga el mejor performance.
- *Código aislado:* Tu código, aún estando en una infraestructura compartida, corre en un ambiente virtual exclusivo, aislado de las demás ejecuciones lamba.


##### Lenguajes soportados
Se puede programar funciones lamba en Nodejs (JavaScript), Python, Java (8), C# (.Net Core) y Go.

