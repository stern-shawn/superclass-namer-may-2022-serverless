exports.handler = async function (context, event, callback) {
  const client = context.getTwilioClient();

  const now = new Date();
  now.setHours(now.getHours() - 1);

  const messages = await client.messages.list({
    to: context.MY_TWILIO_NUMBER,
    dateSentAfter: now,
  });

  const uniqueNumbers = new Set(messages.map((msg) => msg.from));

  let count = 0;
  for (const number of uniqueNumbers) {
    await client.calls.create({
      from: context.MY_TWILIO_NUMBER,
      to: number,
      url: 'https://superclass-xxxx.twil.io/grohl.mp3',
    });
    count++;
    console.log(`Call sent to ...${number.slice(-4)}`);
  }

  return callback(null, { count });
};
