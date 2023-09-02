FROM node:16.10.0-alpine as build

ARG ENV=dev
ARG GIT_COMMIT=dev

WORKDIR /app

COPY package.json ./

RUN npm install --save-dev typescript && \
    npm install --production

COPY . /app

ENV ENVIRONMENT=${ENV}
ENV GITCOMMIT=${GIT_COMMIT}

RUN echo "yarn run build | ARG: ${ENV} | ENV: ${ENVIRONMENT} | GIT COMMIT: ${GITCOMMIT}"

# Install yarn
RUN npm i yarn

RUN yarn run build --mode ${ENV}

FROM nginx:alpine

WORKDIR /app
COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]