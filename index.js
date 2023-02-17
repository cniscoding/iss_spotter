const { fetchMyIP, fetchCoordsByIp } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIp("IP HERE",(error, coordinates) => {
//   if (error){
//     console.log("it didn't work", error);
//     return;
//   }
//   console.log("it worked! returned coordinates", coordinates);
// });