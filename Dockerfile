FROM node:15.2.1-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --silent
RUN npm install react-scripts --global --silent
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
LABEL maintainer="Derek Dicillo <dddicillo@gmail.com>"
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]