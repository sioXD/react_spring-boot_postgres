# Fullstack Project with Spring Boot and React

> [!IMPORTANT]  
> This Project was only developed for learning purposes and is not intended to be used in production.
>
> The main focus was CORS and the Database Connection

> [!NOTE]
> powershell files are for faster server starting

> [!CAUTION]
> pgAdmin4 must run, so the Backend can connect to it

## fast Start

1. Clone Repository: `git clone https://github.com/sioXD/react_spring-boot_postgres`
2. configure postgres in application.properties
3. install react dependencies: `npm install`
4. start all 3 server

## Crashcourse pgAdmin4

```sql
SELECT * FROM public."user"; -- user is the table name
```

To create a Database in pgAdmin4, go to: (Default Workspace) PostgreSQL 17 > Databases, then right-click on Databases and select Create > Database.

To enter the Query Tool in pgAdmin4, click on the top left button with the database symbol. Then change the Database to your Database.

To check if the table exists, go to: (Default Workspace) PostgreSQL 17 > Databases > _yourDatabase_ > Schemas > public > Tables

## Crashcourse Backend (Spring boot)

in application.properties the:

- "spring.datasource.password" to your password from the pgAdmin installation
- append your database name to "spring.datasource.url"

Then start the server with `mvn spring-boot:run`
Or run the Java Application File.

## Crashcourse Frontend (React)

```powershell
npm install # install all dependencies
npm start # start react app
```
