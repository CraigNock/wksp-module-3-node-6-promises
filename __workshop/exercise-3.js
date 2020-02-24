// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

const rp = require('request-promise');
// Given a position (latitude and longitude), returns the position

function getCurrentTemperatureAtPosition(position) {
    return rp(`https://api.darksky.net/forecast/73a1560890f014ae828d04777c8ff48e/${position.lat},${position.lng}`)
    .then(data => {
        let darkData = JSON.parse(data);
        let temp = darkData.currently.temperature;
        console.log(temp);
        return temp;
    })
    .catch(error =>{
        console.log('errenous');
    })
};


// getCurrentTemperatureAtPosition({
//     lat: 37,
//     lng: -122
// });


module.exports = {getCurrentTemperatureAtPosition};