const axios = require('axios');

exports.handler = async function (context, { breed }, callback) {
  console.log('breed ', breed);
  let dogBreed = breed.toLowerCase().trim();

  if (dogBreed.includes(' ')) {
    const [subBreed, breed] = dogBreed.split(' ');
    dogBreed = `${breed}/${subBreed}`;
  }

  const dogApiUrl = `https://dog.ceo/api/breed/${dogBreed}/images/random`;

  const response = await axios.get(dogApiUrl);

  return callback(null, {
    text: `Here's an image of that ${breed} you wanted :)`,
    url: response.data.message,
  });
};
