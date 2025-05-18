# PFO2: Docker

## Materia

Seminario de Actualización "DevOps"

### Docente:

Javier Blanco

### Alumna

Soledad Aldao

### Descripción

Este proyecto es una pequeña aplicación web que muestra los registros de una base de datos MySQL. La aplicación está dockerizada para facilitar su despliegue.

### Estructura de archivos

PFO2-WEBAPP/
├── app/
│ ├── Dockerfile # Imagen personalizada de Node.js para la aplicación
│ ├── index.js # Código principal de la aplicación web en Node.js
│ └── package.json # Dependencias y scripts del proyecto Node.js
├── nginx/
│ └── default.conf # Configuración personalizada del servidor Nginx
└── docker-compose.yml # Define y orquesta los servicios (app, Nginx, MySQL)

### Tecnologías utilizadas

-  Node.js 20
-  MySQL
-  Nginx
-  Docker & Docker Compose

### Cómo levantar el proyecto

1. Clonar el repositorio:

   ```bash
   git clone git@github.com:solealdao/pfo2-webapp.git
   ```

2. Levantar los contenedores:

   ```bash
   docker-compose up --build
   ```

3. Verificar en navegador:

http://localhost:8080

### Imágenes Docker en Docker Hub

Las imágenes utilizadas en esta práctica están disponibles en Docker Hub bajo el usuario `solealdao`. Para descargar la imagen de la aplicación web, utilizar:

`docker pull solealdao/web-app:latest`
