FROM node:18

ARG REACT_APP_BASE_URL
ARG GENERATE_SOURCEMAP

WORKDIR /app
COPY . .

ENV REACT_APP_BASE_URL $REACT_APP_BASE_URL
ENV GENERATE_SOURCEMAP $GENERATE_SOURCEMAP

RUN npm install --force

# Expose port
EXPOSE 3777

# Start the app
CMD [ "npm", "start" ]