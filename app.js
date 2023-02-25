const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=0cc8cc25eaef69b7846eeda2b5bc4d2f&query=Paris';

const options = { method: 'GET', json: true }; // set json: true <==> console.log(JSON.parse(response.body));

console.log('start');
request(url, options, (error, response, body) => {
  // console.log(error);

  // console.log(response.body);
  console.log(
    `${body.current.weather_descriptions[0]}.It's ${response.body.current.temperature} degree outside but it feels Like ${response.body.current.feelslike} degree `
  );

  // console.log(body);
});

console.log('start');
