FROM node:alpine
WORKDIR /app
# COPY ./package.json /APP
RUN npm install
RUN npm install -g nodemon typescript ts-node-dev

# COPY . .
CMD ["npm", "start"]
# CMD ["npm", "run", "dev"]

# FROM node:12.18.3-alpine

# WORKDIR /app
# USER node
# ENV 

# EXPOSE 3000
# VOLUME .
# CMD ["npm", "start"]