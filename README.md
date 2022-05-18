# May 2022 Serverless Superclass

Hello! This repo serves two purposes:

- It hosts this README, which contains links to the explanations and other references I make during the class
- It's also a demonstration of a Twilio Serverless application developed using the [Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit) instead of directly in the Twilio Console like most of the other class examples.

## Class Resources - Twilio docs

- 📚 [Twilio Runtime](https://www.twilio.com/docs/runtime)
- 📚 [The handler method and how to return data from a Function](https://www.twilio.com/docs/runtime/functions/invocation)
- 📚 [Understanding Function & Asset Visibility](https://www.twilio.com/docs/runtime/functions-assets-api/api/understanding-visibility-public-private-and-protected-functions-and-assets)
- 📚 [Assets](https://www.twilio.com/docs/runtime/assets)
- 📚 [The Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit)
- 📚 [Studio](https://www.twilio.com/docs/studio)
- 📚 [Sync](https://www.twilio.com/docs/sync)
- 📚 [Twilio Dev Phone](https://www.twilio.com/docs/labs/dev-phone)

### Further reading and examples - Twilio Docs

- 📚 [Accessing headers and cookies from your Function](https://www.twilio.com/docs/runtime/functions/headers-and-cookies/access)
  - ✍️ [Using cookies to implement basic authentication](https://www.twilio.com/docs/runtime/quickstart/basic-auth)
  - ✍️ [Using cookies to add state to your app](https://www.twilio.com/docs/runtime/quickstart/cookies-state)
- 📚 [A deeper dive into API requests and promise handling](https://www.twilio.com/docs/runtime/quickstart/api-request)

## How to make this project your own

Want to be able to deploy and tweak this example application on your own account? Let's get started!

1. Make sure you have the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) installed as well as the [Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit) plugin. The exact commands may vary based on your OS and choice of shell, but the commands will generally follow this sequence (omit if you already have these installed!):

        npm i -g twilio-cli
        twilio plugins:install @twilio-labs/plugin-serverless
        twilio autocomplete bash
        twilio login

1. Clone this repo to your local machine.

1. In a separate directory from the cloned repo, run:

        twilio serverless:init [YOUR_APP_NAME] --empty

1. Copy the `assets` folder of this repo, and use it to overwrite the empty `assets` folder in your new app's directory.

1. Copy the `functions` folder of this repo, and use it to overwrite the empty `functions` folder in your new app's directory.

1. Copy the contents of `.env.example` from this repo into the `.env` file of your new app. Be sure to define all values (Your `AUTH_TOKEN` will probably already be defined)!

    - If you need a Twilio API Key, [here are some helpful directions](https://www.twilio.com/docs/glossary/what-is-an-api-key#how-can-i-create-api-keys).

1. From your application directory, run this command to deploy your app! You will receive a set of URLs to access your hosted `index.html` (remember, you can also access this more succinctly by visiting the root url of your new Service, too!)

1. To test that it's working, make sure to connect a Twilio phone number to your `/handle-call` Function. You can do so from your [phone numbers page](https://www.twilio.com/console/phone-numbers/incoming) in the console, or with the Twilio CLI:

        twilio phone-numbers:update [E164_PHONE_NUMBER OR PHONE_NUMBER_SID] \
          --voice-url "[URL_TO_HANDLE_CALL_FUNCTION]"

  Once this is complete, have fun calling the number, casting votes, and seeing them update live in your browser! We can't wait to see what else you will build!
