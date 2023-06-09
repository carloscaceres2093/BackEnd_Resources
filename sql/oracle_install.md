# Como instalar Oracle DB con Docker
1. Ingresar al link [oracle container registry](https://container-registry.oracle.com/ords/f?p=113:4:8511484461581:::4:P4_REPOSITORY,AI_REPOSITORY,AI_REPOSITORY_NAME,P4_REPOSITORY_NAME,P4_EULA_ID,P4_BUSINESS_AREA_ID:1863,1863,Oracle%20Database%20Free,Oracle%20Database%20Free,1,0&cs=34qen2heuraVjrsPI5DC-v8a6cENq6PDzWoZZvONU6NNmRaZFSpyuYY-zQHYRAwkFy68KtuJEju9m1qKzMLLggA)

2. Se descarga la imagen de docker con el siguiente comando
```
docker pull container-registry.oracle.com/database/free:latest
```
3. Correr el contenedor a partir de la siguiente sentencia de docker
```
docker run -d --name test_oracle -p 1521:1521 -e ORACLE_PWD=test123 container-registry.oracle.com/database/free:latest
```

4. Para ingeresar al contenedor y quedar dentro del motor de oracle, se ejecuta:
```
docker exec -it test_oracle sqlplus sys/test123@FREE as sysdba
```

5. Para ingresar al motor desde dbeaver, se debe crear al conexión de oracle y luego ingresar los siguientes datos:
    * **Host** : localhost
    * **Port** : 1521
    * **Database** : FREE
    * **Service Name**
    * **Authentication** : Oracle Database Native
    * **Username** : SYS
    * **Role** : SYSDBA
    * **Password** : contraseña_asignada
    