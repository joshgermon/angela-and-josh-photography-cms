FROM node:18-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN yarn install --network-timeout 1000000
RUN yarn build


FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js
ENV SERVER_URL="https://admin.angelajoshphotography.com.au"

WORKDIR /home/node/app
COPY package*.json  ./

RUN yarn install --network-timeout 1000000 --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]
