FROM mhart/alpine-node
WORKDIR /
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "start"]