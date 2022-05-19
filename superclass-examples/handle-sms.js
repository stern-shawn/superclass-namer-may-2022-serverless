exports.handler = (context, event, callback) => {
  console.log('Body: ', event.Body);
  console.log('FromState: ', event.FromState);

  const twiml = new Twilio.twiml.MessagingResponse();
  twiml
    .message(`Hi! Thanks for saying: "${event.Body}". Enjoy this owl!`)
    .media('https://superclass-xxxx.twil.io/owl.png');

  return callback(null, twiml);
};
