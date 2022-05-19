exports.handler = (context, event, callback) => {
  const twiml = new Twilio.twiml.VoiceResponse();

  twiml.say('Hello there! Thanks for calling!');
  twiml.play('https://superclass-xxxx.twil.io/grohl.mp3');

  return callback(null, twiml);
};
