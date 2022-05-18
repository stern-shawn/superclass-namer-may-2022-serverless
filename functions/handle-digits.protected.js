exports.handler = async (context, event, callback) => {
  const input = event.Digits;
  console.log('User input: ', input);

  // Make sure the necessary Sync name is defined
  const syncListName = context.SYNC_LIST_NAME;
  // You can quickly access a Twilio Sync client via Runtime.getSync()
  const syncClient = Runtime.getSync();

  const twiml = new Twilio.twiml.VoiceResponse();
  let vote;

  if (input === '1') {
    vote = '🍰';
    twiml.say(
      'Thank you for supporting cake, it needs all the help it can get'
    );
  } else {
    vote = '🥧';
    twiml.say('You have excellent taste');
  }

  twiml.pause({ length: 1 });

  try {
    await getOrCreateResource(syncClient.lists, syncListName);
    await syncClient.lists(syncListName).syncListItems.create({
      data: {
        vote,
      },
    });
    twiml.say('Vote received and added to the list!');
    return callback(null, twiml);
  } catch (error) {
    console.error(error);
    twiml.say('Something went wrong with adding your vote, we are sorry');
    return callback(null, twiml);
  }
};

// Helper method to simplify getting a Sync resource (Document, List, or Map)
// that handles the case where it may not exist yet.
const getOrCreateResource = async (resource, name, options = {}) => {
  try {
    // Does this resource (Sync Document, List, or Map) exist already? Return it
    return await resource(name).fetch();
  } catch (err) {
    // It doesn't exist, create a new one with the given name and return it
    options.uniqueName = name;
    return resource.create(options);
  }
};
