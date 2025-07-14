FROM node:18

WORKDIR /app

# Only copy what we need
COPY package*.json ./

RUN npm install

# Copy the rest of the app
COPY . .

CMD ["npm", "start"]