FROM node:18-alpine as base

#install dependencies
WORKDIR /app

COPY package.json ./

RUN npm install

RUN npm install --global serve

COPY . .

#build

# FROM base as build

# RUN npm run build

# #release

# FROM nginx:1.21.3-alpine as release

# COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 4173

CMD ["npm", "run", "preview"]