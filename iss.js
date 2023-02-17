const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(`https://api.ipify.org/?format=json`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    callback(null, data.ip);
  });
};

const fetchCoordsByIp = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
  // request('https://ipwho.is/42', (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
      return;
    }

    if (!data.success){
      const message = `Success status was ${data.success}. Server message says ${data.message} when fetching for IP ${data.ip}`;
      callback(Error(message), null);
      return;
    }
    
    let cords = `${data.latitude}, ${data.longitude}` 
    callback(null, cords);
  })
}

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
 const fetchISSFlyOverTimes = function(coords, callback) {
  // ...
};

module.exports = { fetchMyIP,fetchCoordsByIp,fetchISSFlyOverTimes };