const express = require('express');
const Twilio = require('twilio');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use('/handle-sms', (req, res) => {
  console.log('Body: ', req.body.Body);
  console.log('FromState: ', req.body.FromState);

  const twiml = new Twilio.twiml.MessagingResponse();
  twiml
    .message(`Hi! Thanks for saying: "${req.body.Body}". Enjoy this owl!`)
    .media('https://demo.twilio.com/owl.png');

  res.send(twiml.toString());
});

app.listen(3000, () => console.log('Listening on port 3000'));
