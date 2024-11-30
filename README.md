## Instrucciones para levantar el proyecto


### 1. Clonar el repositorio

Primero, clona el repositorio:

```
git clone https://github.com/Chrisvev/vue-app
cd vue-chistes-app

```

### 2. Construir la imagen de Docker

Para construir las imágenes de Docker ejecuta el comando:

```
docker build -t vue-app .


```

Este comando crea una imagen Docker para el frontend y backend.

### 3. Levantar los contenedores

Para levantar los contenedores de Docker, ejecuta:

```
docker run -p 8080:80 vue-app
```

Esto lanza tanto el frontend como el backend, para acceder a la aplicación en **http://localhost:8080**.

---


## Decisiones de diseño y arquitectura

- **Frontend (Vue.js):** Se usa Vue.js porque es un framework ligero, sencillo de configurar. 
También esta implementado "lazy loading" para cargar las vistas de manera eficiente, pero no estan los componentes progrmados solo las vistas con su archivo vue.

- **Backend (Node.js y Express):** En el backend, se usa **Node.js** con el framework **Express** para crear una pequeña API que sirve los chistes.

- **Docker:** Docker se usa para contenerizar la aplicación, facilitando la configuración y despliegue. Todo el frontend y backend están en contenedores que puedes levantar fácilmente con Docker Compose.

- **Lazy Loading:** Hemos implementado lazy loading para que el frontend solo cargue lo que necesita.
---

