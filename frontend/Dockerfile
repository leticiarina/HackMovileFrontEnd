FROM node:8.9-alpine

COPY . /media

ENV METADATA_URL https://gist.githubusercontent.com/yaronf/1994302/raw/9fc6641cc58b116a739c5cb720cba0a7d09ea522/ec2-metadata

RUN apk update \
  && apk add make \
  && apk add ca-certificates wget \
  && update-ca-certificates \
  && wget -O /usr/bin/ec2metadata ${METADATA_URL} && chmod +x /usr/bin/ec2metadata

WORKDIR /media

RUN make build

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
