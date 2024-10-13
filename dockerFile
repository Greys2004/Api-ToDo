#Define las instrucciones para construir una imagen Docker.
#Imagen Base
FROM node

#Crear el directorio donde va a vivir mi aplicacion
WORKDIR /app

#Copiar el package.json
COPY package*.json ./

#Instalar los Nodes Modules
RUN npm install

#Copiar archivos de mi local al contenedor
#Copia todo y pegalo todo
COPY . .

#Compilar aplicacion
RUN npm run build

#Comando de inicio de contenedor
#No se ejecuta hasta que el contenedor se levanta
CMD ["node", "dist/src/index.js"]


