const axios = require('axios');
const fs = require('fs');
const url =
  'http://api.weatherstack.com/current?access_key=0cc8cc25eaef69b7846eeda2b5bc4d2f&query=Paris';

const options = {
  method: 'GET',
  url: 'http://api.weatherstack.com/current',
  params: { query: 'Paris', access_key: '0cc8cc25eaef69b7846eeda2b5bc4d2f' },
};

axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
