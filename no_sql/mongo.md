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