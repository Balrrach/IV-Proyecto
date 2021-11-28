# Load base image
FROM node:alpine

# Variables
ENV USER=docker
ENV GROUP=docker
ENV UID=12345
ENV GID=23456
ENV WORKDIR=/app/test

# Update image, create a user and its group and create application directory
RUN apk add --update \
	    && apk upgrade --available \
	    && addgroup "$GROUP" \
	    && adduser \
	    --disabled-password \
	    --gecos "" \
	    --home "$(pwd)" \
	    --ingroup "$USER" \
	    --no-create-home \
	    --uid "$UID" \
	    "$USER" \
	    && mkdir "/app" \
	    && mkdir "$WORKDIR" \
	    && chown -R "$USER":"$GROUP" "$WORKDIR"

# Change to non root user and copy config files
USER "$USER"
WORKDIR "$WORKDIR"
COPY package.json tsconfig.json "$WORKDIR"/

# Build app and test it
RUN npm install --cache="$WORKDIR"
CMD ["npm", "run", "test"]
