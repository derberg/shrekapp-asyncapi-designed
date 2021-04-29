const service = module.exports = {};
const fetch = require('node-fetch');

/**
 * Client can receive chat messages.
 * @param {object} ws WebSocket connection.
 */
service.subChatMessage = async (ws) => {
  ws.send('Connection with Shrek established');
};
/**
 * Client can send chat messages.
 * @param {object} ws WebSocket connection.
 * @param {object} options
 * @param {string} options.path The path in which the message was received.
 * @param {object} options.query The query parameters used when connecting to the server.
 * @param {string} options.message The received message.
 */
service.pubChatMessage = async (ws, { message, path, query }) => {
  const messageToShrek = message ? encodeURIComponent(message) : '';
  const defaultAnswer = 'Shrek is out sorry. He\'s busy rescuing the princess.';
  let shrekAnswer = defaultAnswer;
  let botAnswer;

  try {
      botAnswer = await fetch(`https://api.wit.ai/message?q=${messageToShrek}`, {
          headers: { 'Authorization': `Bearer ${process.env.CHATBOT_TOKEN}` }
      });
  } catch (e) {
      throw new Error(`Having issues communicating with the bot: ${e}`);
  }

  if (botAnswer) {
      const wrongQuestionAnswer = 'Is it you Donkey!? Ask a better question!';
      const answerObject = await botAnswer.json();
      let firstTraitValue;
      
      for (const [, v] of Object.entries(answerObject.traits)) {
        firstTraitValue = v[0].value;
        break;
      }

      shrekAnswer = firstTraitValue ? firstTraitValue : wrongQuestionAnswer;
  }
  console.log(`Answered with: ${shrekAnswer}`)
  ws.send(shrekAnswer);
};
