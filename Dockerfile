FROM node:20
ENV APP_NAME my-dockerized-app

ENV APP_DIR ./${APP_NAME}

# WORKDIR ${APP_DIR}
WORKDIR /my-dockerized-app

COPY  . /my-dockerized-app

# USER 1000:1000

RUN npm install

EXPOSE 3000

CMD node -r dotenv/config --experimental-json-modules src/index.js