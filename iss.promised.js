const request = require('request-promise-native');

const fetchMyIp = () => {
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`);
}