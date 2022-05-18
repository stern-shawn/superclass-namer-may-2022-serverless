const { AccessToken } = Twilio.jwt;
const { SyncGrant } = AccessToken;

exports.handler = (context, event, callback) => {
  // Create a Sync Grant for a particular Sync service, or use the default one
  const syncGrant = new SyncGrant({
    serviceSid: 'default',
  });

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  // Use environment variables via `context` to keep your credentials secure
  const token = new AccessToken(
    context.ACCOUNT_SID,
    context.TWILIO_API_KEY,
    context.TWILIO_API_SECRET,
    { identity: 'example' }
  );

  token.addGrant(syncGrant);

  // Return two pieces of information: the name of the sync list so it can
  // be referenced by the client, and the JWT form of the access token
  const response = {
    syncListName: context.SYNC_LIST_NAME || 'serverless-superclass',
    token: token.toJwt(),
  };

  return callback(null, response);
};
