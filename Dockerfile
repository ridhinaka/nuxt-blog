#FROM keymetrics/pm2:12-alpine
FROM node:12.16.2

ENV HOST 0.0.0.0

# Set working directory
WORKDIR /usr/app

# Bundle APP files
COPY ./package*.json ./

# Install dependencies
ENV NPM_CONFIG_LOGLEVEL error
RUN npm install pm2 -g
RUN npm install

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]
