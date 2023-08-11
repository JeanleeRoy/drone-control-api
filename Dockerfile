FROM node:lts-alpine

WORKDIR /server

COPY package.json ./

RUN npm install && npm install typescript -g

COPY . . 

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]