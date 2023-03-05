const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const adress = process.argv[2];

geocode(adress, (err, { longitude, latitude, location } = {}) => {
  if (!adress) return console.log('Please provide an adress');
  if (err) return console.log('Error:' + err);

  forecast(latitude, longitude, (err, forecastData) => {
    if (err) return console.log(err);
    console.log(location);
    console.log(forecastData);
  });
});
