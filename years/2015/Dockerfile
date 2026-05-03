FROM node:24
WORKDIR /app
COPY . /app
RUN ls
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"
ENV CI=true
RUN chmod +x run.sh
RUN npm install --global pnpm
RUN pnpm install
ENTRYPOINT ["./run.sh"]
