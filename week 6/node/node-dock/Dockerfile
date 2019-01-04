FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y nodejs npm
RUN apt-get clean

COPY ./package.json .

RUN npm install

COPY . .

CMD ["node", "index.js"]
