FROM node:16 as builder

WORKDIR /home/app
COPY . .
#RUN npm config set unsafe-perm true
#RUN npm install -g typescript
#RUN npm install -g ts-node
RUN npm install

#RUN npm run build

# STAGE 2
FROM node:16-alpine
WORKDIR /home/app
COPY package*.json ./
COPY server ./server
COPY --from=builder /home/app/build ./build
COPY --from=builder /home/app/node_modules ./node_modules
#RUN npm install express


EXPOSE 8080

CMD ["node","/home/app/server/index.js"]