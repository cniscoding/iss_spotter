const request = require('request-promise-native');

const fetchMyIP = () => {
  return request(`https://api.ipify.org/?format=json`);
}

const fetchCoordsByIP = (body) => {
  const IP = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`)
};

module.exports = {fetchMyIP,fetchCoordsByIP};