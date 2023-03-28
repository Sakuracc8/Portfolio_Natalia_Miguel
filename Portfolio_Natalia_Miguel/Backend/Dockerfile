FROM amazoncorretto:11-alpine-jdk //de que imagen partimos
MAINTAINER NATALIAMIGUEL //quien es el dueño
COPY target/natalia-0.0.1-SNAPSHOT.jar NataliaMiguel-app-jar    //va a copiar el empaquetado a github
ENTRYPOINT ["java","-jar","/NataliaMiguel-app-jar"]     //es la instruccion que se va a ejecutar primero
