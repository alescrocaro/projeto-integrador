# Stage 1: Install dependencies
FROM node:18 AS deps

WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install

# Stage 2: Build the application
FROM deps AS builder

WORKDIR /app
COPY . .
RUN npm run build  # Make sure you have this script defined in package.json

# Stage 3: Create the production image
FROM node:18 AS runner

WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/build ./ 

# Expose the port your application is running on
EXPOSE 3333

# Set environment variables
ENV PORT 3333

# Run your migration script (make sure it's defined in package.json scripts)
RUN npx db-migrate

# Start the Node.js application
CMD [ "node", "server.js" ]
