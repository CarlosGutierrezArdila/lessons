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
Permite replicación en otros buckets o en otras cuentas.

### Glacier
Almacenamiento historico. Contenido duradero. Mas economico pero mas lento. 
##### Tiempos de respuesta 
Entrga de archivos o datos entre 2-15 minutos por archivo

### Bases de datos - RDS Aurora PG
###### Relational Database Service (Amazon RDS)
Producto que optimiza el funcionamiento de un motor de base de datos.
Soporta moores  como:
- Aurora PG.
- MySQL.
- MariaDB.
- PostgreSQL.
- Oracle.
- Microsoft SQL Seerver.

RDS Incluye mantenimiento de base de datos, respaldos diarios, optimizaciones para cada tipo de uso, etc. 
###### RDS PG
Motor de postgres en una instancia optimizada para correr con la máxima eficiencia. Incluye por omisión, tareas de optmización como: vacuum, recuperar esacio en disco duro, optmiizar la planeació de queries.
Permite:
- Hacer respaldos automatizados.
- Cifrado: En disco duro.
- Migración asistida.
- Alta disponibilidad.
Por omisión Amazon no permite conectar se a la base de datos hasta que se especifique.

##### Aurora PG
Aurora PG es una nueva propuesta en bases de datos de  AWS.
AWS toma el motor de Postgres, instancias de nueva generación, optimizaciones varias en el kernel/código y obtiene un Postgres 3x más rápido.
Aurora PG Es compatible con Postgres 9.6.x.
Hay que tener en cuenta: 
- No es gratis.
- Es eficiente por varias razones:
    - Modificacioens al codigo mismo del motor de bases de datos.
    - Instancias de última generación.
- Aurora PG estará por omisión en una configuración de alta disponibilidad con distintas zonas, es decir, en 3 centros de datos a un mismo tiempo.

Cuando se crea una base por defecto se crean varias cosas, por ejemplo, un entrada de route53 (Alias), máquina principal y dos copias que sincroniza de manera utomatizada.

La conexión se hace igual que en una base postgres.
psql -h host -U user dbname > dumpfile.sql

##### Mejores practicas del uso de RDS
- Respaldos
- Replicar la base de datos.

### ASG
Auto scaling groups, crecen o desminuyen de acuerdo a la carga.
### Elastic Load Balancer
Recibir clientes Http y https con el certificado que se decida.
Se puede crear un certificado en Amazon que sea válido en la mayoria de los dispositivos.
### Route53
Administrador de DNS. 
AWS te permite tener un DNS muy avanzado a tu disposición, con el podrás hacer subdominios asignados a instancias y verlos reflejados en segundos.
Route 53 está disponible en todas las regiones de AWS, por lo que funcionará excelente aún en caso de que alguna de las regiones se pierda.
Se pueden comprar dominios y redirigir urls.

### IAM
Permite administrar todos los permisos de acceso de usuarios. USuarios sobre máquinas y máquinas sobre mpaquinas.
Tiene:
- Usuarios
- Grupo: Agrupaciones de usuarios.
- Roles: Dar permisos a entidades.
- Politicas: Especifican los permisos.

### Cloudwatch
Muestra diversos eventos relacionados con la infraestructura o servidores, para tener un lugar cnetralizado de logs e información.
- Ver logs.
- Alarmas.
- Metricas.
    - Por instancia.

### Cloudtrail
Herramienta de auditoria que permite ver quien o que hizo en la cuenta de AWS.

### EC2
- **Updates:** Manuales
- **Instancias:** Maquinas virtualizadas.
- **Seguridad:** Generación de llaves únicas.
- **Espacio:** Espacio en disco virtualmente infinito.
- **Redundancia:** Copias de seguridad en diversas regiones.
- **Firewall:** Desde donde y por donde se puede conectar a la máquina.
- **Direcciones IP Estaticas:** Comprar ip pública estatica.
- **Respaldos:** Respaldar toda la máquina.
- **Escalable:** Incrementar o decrementar los recursos de la máquina.
- **Migración de snapshots:** Coppiar snapshots a otras regiones.
- **Grupos de seguridad:** Accesos a la máquina por direcciones.

Permisos de la pem chmod +600

### Serverless
Sin necesidad de servidores

### Lambda 
Relacionado al concepto de serverless permite ejecutar código sin necesidad de que corra un servidor, es administrado por amazon.

Siempre se debe definir un `lambda_handler` o **handler**.

##### Limites
- **Memoria:** Mínima de 128MB, máxima 3000MB con incrementos de 64MB.
- **Límites de ejecución y espacio:** Puedes correr tu aplicación hasta 300 segundos y tienes un /tmp limitado a 512MB.
- **Ejecución paralela:** Esta limitada a 1000 ejecuciones concurrentes (a un mismo tiempo), no tiene límite en ejecuciones secuenciales (una detrás de otra).

##### Ventajas de Lambda:
- **Seguridad:** Al ser una infraestructura compartida, no tienes que preocuparte de seguridad: AWS maneja todo.
- **Performance:** AWS está monitoreando constantemente la ejecución de tus funciones y se encarga de que siempre tenga el mejor performance.
- **Código aislado:** Tu código, aún estando en una infraestructura compartida, corre en un ambiente virtual exclusivo, aislado de las demás ejecuciones lamba.


##### Lenguajes soportados
Se puede programar funciones lamba en Nodejs (JavaScript), Python, Java (8), C# (.Net Core) y Go.

## Seguridad
### Certificate Manager
Creación de certificados SSL, permite crear nuevos certificados o importar alguno y usar los en balanceadores.

### GuardDuty 
Auditoria constante de todos los intentos de conexiones que tienen los equipos.
Muestra datos sobre los ataques.

### Rekognition
Servicio basado en inteligencia artificial que identifica patrones en imagenes, permite:
- Moderación de imagenes.
- Analisis facial.
- Reconocimiento de celebridades.
- Comparación de rostros.
- Texto en imagenes.
