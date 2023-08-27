# Stage 1: Install dependencies and run migrations
FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Initialize Sequelize and run migrations
RUN npx sequelize init
RUN npx sequelize db:migrate

# Expose the port your application is running on
EXPOSE 3333

# Start the Node.js application
CMD [ "node", "src/index.js" ]
