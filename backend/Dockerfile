# Use an official Maven image with Eclipse Temurin JDK 17
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
# Build the application
RUN mvn clean package -DskipTests

# Use Eclipse Temurin JRE 17 for a smaller, secure runtime
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-XX:+UseContainerSupport", "-Xmx400m", "-Xms200m", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.jar"]
