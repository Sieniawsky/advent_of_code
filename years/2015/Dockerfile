FROM node:24-alpine

WORKDIR /app

COPY package.json run.sh run.ts ./

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"
ENV CI=true

RUN npm install --global pnpm
RUN pnpm install

ENTRYPOINT ["sh", "./run.sh"]
