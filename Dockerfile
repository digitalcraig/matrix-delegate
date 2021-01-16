FROM node

ENV LANG C.UTF-8
ENV NODE_ENV production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json  /usr/src/app/
RUN npm install 

# Bundle app source
COPY src /usr/src/app
# Expose port
EXPOSE 3000

CMD [ "npm","start" ]

