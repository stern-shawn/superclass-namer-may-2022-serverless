exports.handler = (context, event, callback) => {
  const twiml = new Twilio.twiml.VoiceResponse();

  const gather = twiml.gather({
    numDigits: 1,
    action: '/handle-digits',
  });
  gather.say('You must decide. Press 1 for cake. Press 2 for pie.');

  twiml.redirect('/handle-call');

  return callback(null, twiml);
};
