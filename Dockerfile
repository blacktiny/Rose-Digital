FROM tarampampam/node:latest
WORKDIR /usr/src
COPY package-lock.json package.json ./
RUN npm install
COPY . .
RUN npm run build && mv docroot /public
