This repository stores a WebSocket project designed with AsyncAPI. It exposes an interface to talk to a chatbot trained on Wit.ai.

# Shrek App

Purpose of this app is to have some fun with AsyncAPI and WebSocket and define an interface for ... Shrek.

![](https://media.giphy.com/media/10Ug6rDDuG3YoU/giphy-downsized.gif)

You can use this API to chat with Shrek bot or to get updates about artifical travels to different locations.

## Run the app

1. Install dependencies `npm i`
1. Start server `CHATBOT_TOKEN=your-token npm start`. Replace **your-token** with token of your bot that you need to first create at Wit.ai

To interact with the server's API, open **index.html** file in the browser and use it's instructions or just install [websocat](https://github.com/vi/websocat#installation) client.

## Learn more

For more context on the application purpose and what parts of the project are generated and what custom, read [From API-First to Code Generation - A WebSocket Use Case](https://asyncapi.com/blog/websocket-part3).

## Development

Documentation from `docs` is generated with the following command using the AsyncAPI Generator:
```bash
ag asyncapi.yml @asyncapi/html-template -o docs --force-write 
```

Generated docs are hosted here: https://derberg.github.io/shrekapp-asyncapi-designed/

The initial code of the project was generated with the following command using the AsyncAPI Generator:
```bash
ag asyncapi.yml @asyncapi/nodejs-ws-template --force-write -p server=swamp
```