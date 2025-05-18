# Imagen base oficial de Node.js v20
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia archivos de dependencias para instalar paquetes
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código fuente al contenedor
COPY . .

# Expone el puerto en que corre la app (3000)
EXPOSE 3000

# Comando por defecto para iniciar la app
CMD ["npm", "start"]