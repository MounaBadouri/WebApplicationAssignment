FROM node:10-alpine
WORKDIR /moviequizz
COPY package.json .
COPY server.js .
COPY /3-WAA-Moviequizz ./3-WAA-Moviequizz
RUN npm install

# Run the server as a non-root user
RUN adduser -D myuser
USER myuser

CMD ["node", "server.js"]
