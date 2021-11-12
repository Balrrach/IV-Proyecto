# Load base image
FROM node:alpine

# Variables
ENV USER=docker
ENV GROUP=docker
ENV UID=12345
ENV GID=23456
ENV WORKDIR=/delivery

# Update image and create a user and its group
RUN apk add --update
RUN addgroup "$GROUP"
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "$(pwd)" \
    --ingroup "$USER" \
    --no-create-home \
    --uid "$UID" \
    "$USER"

# Create to application directory
RUN mkdir "$WORKDIR" \
	    && chown -R "$USER":"$GROUP" "$WORKDIR"
USER "$USER"
WORKDIR "$WORKDIR"
COPY package.json "$WORKDIR"
COPY src "$WORKDIR"
COPY tsconfig.json "$WORKDIR"
# COPY data /delivery

# Fix npm directory
# USER root
# RUN npm cache clean --force
# # RUN chown -R "$USER":"$GROUP" "/.npm"
# RUN npm -g config set user "$USER"
# USER "$USER"

# Build app and run it
RUN npm install --cache="$WORKDIR"
RUN npm run build
CMD ["npm", "run", "test"]
