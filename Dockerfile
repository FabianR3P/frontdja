FROM node:18.12.1-slim
WORKDIR /quotes
COPY package.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
