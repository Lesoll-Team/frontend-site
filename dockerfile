#create image 
FROM node:20
WORKDIR /app
COPY package.json .
RUN npm i -f
COPY . .
CMD [ "npm","run","dev" ]