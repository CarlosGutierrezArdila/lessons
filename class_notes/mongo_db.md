# Mongo DB

![image](https://user-images.githubusercontent.com/32855979/61408373-7b1bcb00-a8a5-11e9-9ef4-8fffe9bd052e.png)

# Conectarse a MongoDB
mongo <URI Atlas>


# Usar la base de datos creada de platzi
use platzi-db


# El campo _id si no es agregado por nosotros de forma explícita, MongoDB lo agrega por nosotros como un ObjectId
# el campo _id es obligatorio en todos los documentos


# ---------------------------------Create-----------------------------
db.inventory.insertOne(
   { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)


db.inventory.insertMany( [
   { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
   { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
   { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }
] )


db.inventory.find( { item: "canvas" } )


db.inventory.insertOne(
   { _id: "one", item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)
# Atomicidad, todas las operaciones de escritura en MongoDB con atómicas a nivel de documentos 


# ---------------------------------Read-------------------------------
db.inventory.find( {} )


# Igualdad 
db.inventory.find( { status: "D" } )


# Operadores
db.inventory.find( { qty: { $gt: 30 } } )


# Condición AND
db.inventory.find( { status: "A", qty: { $lt: 30 } } )


# Condición OR con operador
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )


# Trae el primer documento que cumpla con el filtro de acuerdo al orden natural en que los documentos se encuentren guardados en disco
db.inventory.findOne( { status: "A", qty: { $lt: 30 } } )


# ---------------------------------Update-----------------------------
# Update One
db.inventory.updateOne(
   { item: "paper" },
   {
     $set: { "size.uom": "cm", status: "P" },
     $currentDate: { lastModified: true }
   })
# Update Many
db.inventory.find({qty: {$lt: 50}})


db.inventory.updateMany(
   { "qty": { $lt: 50 } },
   {
     $set: { "size.uom": "in", status: "P" },
     $currentDate: { lastModified: true }
   }
)


db.inventory.find({qty: {$lt: 50}})


# Reemplazar un documento y conservar su _id
db.inventory.find({item: "paper"})


db.inventory.replaceOne(
   { item: "paper" },
   { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 40 } ] }
)


db.inventory.find({item: "paper"})
# ---------------------------------Delete-----------------------------
db.inventory.find({status: "A"})
# Borrar muchos documentos de acuerdo a un filtro
db.inventory.deleteMany({ status : "A" })


db.inventory.find({status: "D"})
# Borrar un documento
db.inventory.deleteOne( { status: "D" } )


# Borrar todos los documentos de una base datos
db.inventory.deleteMany({})

# Tipos de datos 

- Strings: Nos sirven para guardar textos.
- Boolean: Información cierta o falsa (true y false).
- ObjectId: Utilizan el tiempo exacto en el que generamos la consulta para siempre generan IDs únicos. Existen en BSON pero no en JSON.
- Date: Nos sirven para guardar fechas y hacer operaciones de rangos entre ellas.
- Números: Doubles, Integers, Integers 64 bits y Decimals.
- Documentos Embebidos: Documentos dentro de otros documentos ({}).
- Arrays: Arreglos o listas de cualquier otro tipo de datos, incluso, de otras listas.

# Operadores:

## Operadores por elemento.
- $exist: Documentos que cuentan con un campo específico.
- $type: Documentos que cuentan con un campo de un tipo específico.
## Operadores lógicos.
- $and: Une queries con un and lógico.
- $not: Invierte el efecto de un query.
- $nor: Une queries con un nor lógico.
- $or: Une queries con un or lógico.
## Operadores de comparación en MongoDB.
- $eq: Igual ‘=’.
- $gt: Mayor ‘>’.
- $gte: Mayor o igual ‘>=’.
- $lt: Menor ‘<’.
- $lte: Menor o igual ‘<=’.
- $ne: Diferente ‘!=’.
- $in: Valores dentro de un arreglo.
- $nin: Valores que no están dentro de un arreglo.

Las agregaciones son operaciones avanzadas que podemos realizar sobre nuestra base de datos con un poco más de flexibilidad en nuestros documentos.

# Agregaciones

- **Pipeline de Agregaciones:** Es un grupo de multiples etapas que ejecutan agregaciones en diferentes momentos. Debemos tener muy en cuenta el performance de nuestras agregaciones porque las agregaciones corren en todo el cluster.

- **Map-Reduce:** Nos permite definir funciones de JavaScript para ejecutar operaciones avanzadas. La función de map nos permite definir o “mappear” los campos que queremos usar y la función reduce nos permite ejecutar operaciones y devolver resultados especiales. Por ejemplo: podemos mappear algunos campos y calcular la cantidad de elementos que cumplen ciertas condiciones.

- **Agregaciones de propósito único:** Funciones ya definidas que nos ayudan a calcular un resultado especial pero debemos tener cuidado porque pueden mejorar o afectar el performance de la base de datos. Por ejemplo: count(), estimatedDocumentCount y distinct.

