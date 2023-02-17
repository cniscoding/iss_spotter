const {fetchMyIP, fetchCoordsByIP} = require('./iss.promised');

fetchMyIP()
  .then(body => console.log(body))

