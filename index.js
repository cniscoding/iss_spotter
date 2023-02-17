const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes,nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIp("IP", (error, coordinates) => {
//   if (error) {
//     console.log("it didn't work", error);
//     return;
//   }
//   console.log("it worked! returned coordinates", coordinates);
// });

// const coords = { latitude: '43.53453', longitude: '-32.5434' };

// fetchISSFlyOverTimes(coords, (error, risetime) => {
//   if (error) {
//     console.log("it didn't work", error);
//     return;
//   }
//   console.log('it worked! return risetime', risetime);
// });
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);

});

module.exports = {printPassTimes};