FROM node:latest as builder

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod

CMD ["npm","start"]


#docker build -t angular-app .
#docker run -p 4200:4200 --name angular-container1 angular-app