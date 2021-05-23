FROM node:14.15.4 as builder

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ARG VUE_APP_API_URL=https://api.fixgame.ru/api

RUN yarn build

FROM nginx:1.19.6

COPY .docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]#                                                                                                                                                                                                        
