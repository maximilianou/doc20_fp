FROM node
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . /opt/app
RUN chown -R node:node /opt/app
USER node
CMD ["npm", "run", "start"]


