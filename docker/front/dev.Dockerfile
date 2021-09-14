FROM node:8 as build
WORKDIR /opt/ossystem.ua/
COPY package*.json ./
RUN npm ci -q
COPY . .
CMD ["npm", "run", "start"]
