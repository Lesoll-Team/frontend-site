#create image
FROM node:20
WORKDIR /app
COPY package.json .
RUN npm i -f
COPY . .
EXPOSE 3000
CMD [ "npm","run","dev" ]
# w can replace CMD in docker compose with (command)

# we'll be passing ARG from dockercompose in build command line , we will send two arguments (context) geting Dockerfile place and (args) taking args .

# ARG PROJECT_ENV
# RUN if ["$PROJECT_ENV"="production"];\
#   then npm install --force --only-production;\
#   else npm install --force ;\
#   if
