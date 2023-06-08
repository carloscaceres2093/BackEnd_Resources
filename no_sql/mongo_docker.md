# Pasos para entrar a mongo
---

* Levantar el contenedor de mongo (Usar la versión 6 para poder replicar los ejemplos)


* Una vez levantado el contenedor de mongo, hay dos formas de accesar a mongodb en el contenedor.
    1. Ejecutar del comando *"```docker exec -it <container> bash```"* y luego una vez se encuentre dentro del servidor, ejecutar el comando *"```mongosh -u <usuario root> -p <contraseña>```"*
    2. Ejectuar  del comando *"```docker exec -it <container> mongosh -u <usuario root> -p <contraseña>```"*  y el accesa directamente a mongo dentro del contenedor
