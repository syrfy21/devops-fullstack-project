FROM node:18

WORKDIR /app

COPY backend/package.json backend/server.js backend/database.json ./
RUN npm install

COPY frontend ./frontend

EXPOSE 3000

CMD ["npm", "start"]
