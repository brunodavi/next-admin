FROM node:20-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm i

COPY app ./app
COPY public ./public
COPY next.config.js .
COPY jsconfig.json .
COPY middleware.js .

ENV NEXT_TELEMETRY_DISABLED 1

CMD npm run dev
