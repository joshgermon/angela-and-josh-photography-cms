FROM node:18.8-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN yarn install
RUN yarn run build


FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js
ENV SERVER_URL="https://admin.angelajoshphotography.com.au"

WORKDIR /home/node/app
COPY package*.json  ./

RUN yarn install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]
