const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIp((error, coordinates) => {
//   if (error){
//     console.log("it didn't work", error);
//     return;
//   }
//   console.log("it worked! returned coordinates", coordinates);
// });

const coords = { latitude: '45.53453', longitude: '-32.5434' };

fetchISSFlyOverTimes(coords, (error, risetime) => {
   if (error) {
    console.log("it didn't work", error);
    return;
   }
   console.log('it worked! return risetime', risetime );
});