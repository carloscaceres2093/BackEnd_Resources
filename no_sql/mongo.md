# Lista comandos MONGODB SHELL
---

## Listar bases  de datos

```
show databases;
show dbs;
```

## Creación bases de datos 
-------

En mongo shell no se crean bases de datos, hasta que se inserta el primer dato sobre la misma.

## Listar colecciones

```
show collections;
```

## Creación de la colección
----

Y las colecciones (Simil TABLA sql ) solo se crean hasta que se crea el primer dato. Sin embargo apenas se crea el primer dato se hace uso de 
```
db.<nombre_coleccion>.sentencias_mongosh
```

## Insert datos en una colección
---

Inserción datos uno por uno con el método ***insertOne()***
* Creación de documento con *_id*
```
    db.clases_temp.insertOne(
        {
            _id:1,
            nombre_curso: "Back End",
            modulos : " Acá van los modulos",
            categoria : "Programación",
            modalidad :{
                tipo_modalidad: "Virtual"
            },
            profesor: {
                nombre: "Carlos Cáceres",
                identificacion : "1234567890",
                registro : {
                    codigo: "123",
                    fecha_creacion : new Date(),
                    beneficios : ""
                }
            },
            estudiantes : [
                {
                    nombre : "Carlos Navarrete",
                    correo : "carlosnavarrete@yahoo.com",
                    identificacion : "0987654321"
                },
                {
                    nombre : "Christian Olave",
                    correo : "christianolave@yahoo.com",
                    identificacion : "0123987654"
                }
            ]
        }
    );
```
* Creación de documento con *_id* autogenerado:
```
    db.clases.insertOne(
        {
            nombre_curso: "Back End",
            modulos : " Acá van los modulos",
            categoria : "Programación",
            modalidad :{
                tipo_modalidad: "Virtual"
            },
            profesor: {
                nombre: "Carlos Cáceres",
                identificacion : "1234567890",
                registro : {
                    codigo: "123",
                    fecha_creacion : new Date(),
                    beneficios : ""
                }
            },
            estudiantes : [
                {
                    nombre : "Carlos Navarrete",
                    correo : "carlosnavarrete@yahoo.com",
                    identificacion : "0987654321"
                },
                {
                    nombre : "Christian Olave",
                    correo : "christianolave@yahoo.com",
                    identificacion : "0123987654"
                }
            ]
        }
    );
```


Inserción de multiples datos con el método ***inserMany()***

```
    db.clases.insertMany(
        [
            {
                nombre_curso: "Front End",
                modulos : " Acá van los modulos",
                categoria : "Programación",
                modalidad :{
                    tipo_modalidad: "Virtual"
                },
                profesor: {
                    nombre: "Carlos Cáceres",
                    identificacion : "1234567890",
                    registro : {
                        codigo: "123",
                        fecha_creacion : new Date(),
                        beneficios : ""
                    }
                },
                estudiantes : [
                    {
                        nombre : "Carlos Navarrete",
                        correo : "carlosnavarrete@yahoo.com",
                        identificacion : "0987654321"
                    },
                    {
                        nombre : "Christian Olave",
                        correo : "christianolave@yahoo.com",
                        identificacion : "0123987654"
                    }
                ]
            },
            {
                nombre_curso: "Ciencia de Datos",
                modulos : " Acá van los modulos",
                categoria : "Programación",
                modalidad :{
                    tipo_modalidad: "Virtual"
                },
                profesor: {
                    nombre: "Carlos Cáceres",
                    identificacion : "1234567890",
                    registro : {
                        codigo: "123",
                        fecha_creacion : new Date(),
                        beneficios : ""
                    }
                },
                estudiantes : [
                    {
                        nombre : "Carlos Navarrete",
                        correo : "carlosnavarrete@yahoo.com",
                        identificacion : "0987654321"
                    },
                    {
                        nombre : "Christian Olave",
                        correo : "christianolave@yahoo.com",
                        identificacion : "0123987654"
                    }
                ]
            }
        ]
    );
```

## Consultar Documentos

**Consultar un solo registro**

1. Consultar el primer documento:
```
db.clases.findOne()
```
```
SELECT * FROM clases limit 1'
```
2. 
```
db.clases.findOne({_id:ObjectId("64812f1b4b66e7c7c9f477e4")})
```
```
SELECT * FROM clases where id = '64812f1b4b66e7c7c9f477e4'
```

**Consultar Varios Registros**
1. Consultar todos los registros
```
db.clases.find()
```
```
SELECT * FROM clases 
```
2. Consultar varios registros por condición

```
db.clases.find({categoria:"Matematicas"})
```
```
SELECT * FROM clases where categoria = 'Matematicas'
```
3. Consultar varios registros por condición con anidación

```
db.clases.find({"profesor.identificacion":"123456789"})
```

4. Consultar varios registros por condición con limit

```
db.clases.find({categoria:"Programación"}).limit(2)
```
```
SELECT * FROM clases where categoria = 'Programación' limit 2
```

4. Consultar varios registros  con limit

```
db.clases.find().limit(4)
```
```
SELECT * FROM clases limit 4
```

## Actualizar documentos

**Actualizar un documento**
```
db.clases.updateOne({_id: ObjectId("64813331ec596c63e63a3b3a")},
{
    $set: {
        modulos: "Estos son los modulos a cambiar"
    }
}
)
```

**Actualizar varios documentos**
1.  Bajo una condición
```
db.clases.updateMany({categoria: "Programación"},
{
    $set: {
        modulos: "Estos son los modulos de programación"
    }
}
)
```
2.  Bajo varias condición
```
db.clases.updateMany({categoria: "Programación", nombre_curso:{$regex: "End"}},
{
    $set: {
        modulos: "Estos son los modulos de programación front y back"
    }
}
)
```

## Borrar Documentos

**Borrar un documento**
```
db.clases.deleteOne({_id:ObjectId("648133cbec596c63e63a3b3b")})
```

**Borrar varios documento**
```
db.clases.deleteMany({categoria:"Programación"})
```

## Borrar Colecciones
```
db.test.drop()
```

## Borrar bases de datos

Se ubica en la base de datos que quiere borra con el comando *```use <database>```* y luego ejecuta el compando de borrado 
```
db.dropDatabase()
```

## Crear index

Un index es un sistema que usan los motores de base de datos para realizar busquedas rápidas, esto tiene 2 implicaciónes
1. La buena, es que optimiza las queries de los index que se creen, entonces, si yo hago un filtro bajo una columan que tiene un index, será mucho más performante la query.
2. La mala, es que afecta directame los insert y los updates

**Creación de index**
```
db.clases.createIndex({categoria:1})
```
**Consulta  de index**
```
db.clases.getIndexes()
```
**Borrado de index**
```
db.clases.dropIndex("categoria_1")
```