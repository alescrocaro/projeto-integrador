# Stage 1: Install dependencies and run migrations
FROM node:18

WORKDIR /app
COPY . .

RUN npm install


# Initialize Sequelize and run migrations
#RUN npx sequelize-cli init --force
#RUN npx sequelize-cli db:migrate 
#--url "postgres://admin:123456@db:5437/forumDB"

# Expose the port your application is running on
EXPOSE 3337

# Start the Node.js application
#CMD [ "node", "src/index.js" ]
CMD [ "npm", "start" ]
