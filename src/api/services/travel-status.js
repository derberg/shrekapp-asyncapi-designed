const service = module.exports = {};

/**
 * Client can receive travel info status.
 * @param {object} ws WebSocket connection.
 */
service.subTravelInfo = async (ws) => {
  ws.send('Message from the server: Implement here your business logic that sends messages to a client after it connects.');
};
