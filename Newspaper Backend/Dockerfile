FROM openjdk: 11         
VOLUME /tmp                  
EXPOSE 8080                   
ADD /target/Newspaper-0.0.1-SNAPSHOT.jar Newspaper-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/Newspaper-0.0.1-SNAPSHOT.jar"] 