# Stage 1: Install dependencies and run migrations
FROM node:18

WORKDIR /app
COPY . .

RUN npm install


# Initialize Sequelize and run migrations
RUN npx sequelize init --force
RUN npx sequelize db:migrate --url "postgres://admin:123456@localhost:5544/forumDB"

# Expose the port your application is running on
EXPOSE 3333

# Start the Node.js application
CMD [ "node", "src/index.js" ]
