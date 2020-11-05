FROM node:stretch-slim 
#create app directory
WORKDIR /usr/src/app/ms-second
COPY package.json .
RUN npm install
COPY .  .
EXPOSE 4000
CMD ["npm", "start"]