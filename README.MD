# API RESTful de Gestión de Películas de Terror

Este proyecto implementa una API RESTful diseñada para gestionar una colección de películas, con un enfoque inicial en el género de terror.

Desarrollada utilizando **Node.js**, **Express**, y **MongoDB Atlas** con **Mongoose** como Object Data Modeling (ODM) layer, esta API demuestra el uso de un backend funcional y seguro.

---

## Características Principales

El sistema ofrece una gestión completa de recursos (CRUD) y un robusto sistema de seguridad:

### Autenticación y Autorización

* **Registro de Usuarios:** Permite registrar nuevos usuarios con contraseñas encriptadas usando **Bcrypt**.
* **Inicio de Sesión:** Los usuarios pueden iniciar sesión para obtener un **JSON Web Token (JWT)**.
* **Acceso Protegido:** Las rutas sensibles están protegidas por autenticación JWT, donde el token debe ser enviado en el encabezado:
    ```
    Authorization: Bearer <token>
    ```
* **Autorización por Roles:** Implementa un sistema de roles para restringir acciones:
    * **`isAdmin`:** Permite crear, actualizar y eliminar películas.
    * **Usuarios Estándar:** Solo pueden consultar y listar información.

### CRUD de Películas

Permite la gestión completa de la colección de películas:

| Método | Ruta | Descripción | Requerimientos |
| :--- | :--- | :--- | :--- |
| `GET` | `/movies` | Lista todas las películas. | **Autenticación JWT** |
| `GET` | `/movies/:id` | Busca una película específica por su ID. | **Autenticación JWT** |
| `POST` | `/movies` | Registra una nueva película. | **Autenticación JWT & `isAdmin`** |
| `PUT` | `/movies/:id` | Actualiza los datos de una película existente. | **Autenticación JWT & `isAdmin`** |
| `DELETE` | `/movies/:id` | Elimina una película de la colección. | **Autenticación JWT & `isAdmin`** |

---

## Tecnologías

* **Node.js:** Entorno de ejecución de JavaScript.
* **Express.js:** Framework web para Node.js, utilizado para construir la API.
* **Mongoose:** ODM para MongoDB.
* **MongoDB Atlas:** Base de datos NoSQL en la nube.
* **Dotenv:** Para la gestión de variables de entorno.
* **Bcrypt:** Para la encriptación de contraseñas.
* **JSON Web Token (JWT):** Para la autenticación basada en tokens.
* **Nodemon:** Para el desarrollo y reinicio automático del servidor.
