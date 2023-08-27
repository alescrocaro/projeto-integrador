# Install dependencies only when needed
FROM node:18 AS deps

WORKDIR /app
COPY package.json yarn.lock ./
RUN apk add --no-cache g++ make python3 git
RUN yarn install


# Rebuild the source code only when needed
FROM node:18 AS builder
ARG REACT_APP_API_URL
ARG REACT_APP_IMPORT_API_URL

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV production
ENV REACT_APP_API_URL $REACT_APP_API_URL
ENV REACT_APP_IMPORT_API_URL $REACT_APP_IMPORT_API_URL
RUN yarn build

# Production image, copy all the files and run next
FROM node:18 AS runner
WORKDIR /app

RUN yarn global add serve
COPY --from=builder /app/build ./

EXPOSE 8080

ENV PORT 8080

CMD serve -s -l 8080 .