FROM node:alpine
WORKDIR /app
# COPY ./package.json /APP
RUN npm install
# COPY . .
CMD ["npm", "start"]

# FROM node:12.18.3-alpine

# WORKDIR /app
# USER node
# ENV 

# EXPOSE 3000
# VOLUME .
# CMD ["npm", "start"]