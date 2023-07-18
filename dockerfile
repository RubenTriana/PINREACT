# Usar una imagen base
FROM node:latest 

# Definir directorio de trabajo
WORKDIR /app 

# Copiar los archivos del proyecto al directorio de trabajo
COPY ./build /app 

# Construir la aplicación para producción
RUN npm run build

# Instalar el paquete 'serve' para servir la aplicación
RUN npm install -g serve

# Exponer el puerto que será utilizado por Railway
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["serve", "-s", "build", "-l", "3000"]