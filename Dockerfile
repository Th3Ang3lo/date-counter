FROM node:18

WORKDIR /app

COPY . .

RUN npm install && npm run build && npm run test

CMD npm run start