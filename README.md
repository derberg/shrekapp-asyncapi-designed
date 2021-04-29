This repository stores a WebSocket project designed with AsyncAPI. It exposes an interface to talk to a chatbot trained on Wit.ai.

# Shrek App

Purpose of this app is to have some fun with AsyncAPI and WebSocket and define an interface for ... Shrek.

![](https://media.giphy.com/media/10Ug6rDDuG3YoU/giphy-downsized.gif)

You can use this API to chat with Shrek bot or to get updates about artifical travels to different locations.

## Development

Documentation from `docs` is generated with the following command using the AsyncAPI Generator:
```bash
ag asyncapi.yml @asyncapi/html-template -o docs --force-write 
```

The initial code of the project was generated with the following command using the AsyncAPI Generator:
```bash
ag asyncapi.yml @asyncapi/nodejs-ws-template --force-write -p server=swamp
```