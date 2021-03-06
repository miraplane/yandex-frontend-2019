FROM node:13

COPY config /config
COPY src /src
COPY next.config.js /
COPY package.json /
COPY package-lock.json /

RUN npm run deps:production

ENV NODE_ENV production
ENV DATABASE_URL postgres://ubbtjoyt:YC4rdvHoWsNzCHVQ2rJVakaERv8XY1G9@rogue.db.elephantsql.com:5432/ubbtjoyt

ENV HOST 0.0.0.0
ENV PORT 80
EXPOSE 80

CMD npm start
