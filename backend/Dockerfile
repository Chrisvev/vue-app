
FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

#  producción
FROM node:18-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app /usr/src/app
EXPOSE 8080
CMD ["npm", "start"]  # Se asume que tienes un script `start` en tu package.json
