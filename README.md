# NextJS OpenJira APP

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

MongoDB URL Local:

````
mongodb://localhost:27018/entriesdb
```
````

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

## Llenar la base de datos con información de pruebas

Endpoint:

```
GET http://localhost:3000/api/seed
```
