// Exercise 1 - `getIssPosition`
// -----------------------------
//   1. Install the request-promise module with `yarn`
//      making sure it's added to `package.json`.
//   2. Complete the code of this function so that it returns
//      the position of the ISS as a `Promise`.
//   3. Use the data from http://api.open-notify.org/iss-now.json to do your work
//   4. The ISS API returns the position keys as `latitude` and `longitude`.
//      Return them as `lat` and `lng` instead.

// require the 'request-promise' module.
const rp = require('request-promise');

// Returns the current position of the ISS
function getIssPosition() {
    return rp('http://api.open-notify.org/iss-now.json')
        .then(info => {
            let issInfo = JSON.parse(info);
            let obj = {
                lat: issInfo.iss_position.latitude,
                lng: issInfo.iss_position.longitude
            };
            // console.log(obj);
            return obj;
        })

    
}

// NOTE:
// in order to see the result of the promise, you need to console.log
// the data WITHIN the promise chain (in its own then)

// You are 'returning' the value, beacause you will need this functionality
// in another exercise.

// If you console.log the the function call, you will not see the result as console.log
// doesn't wait for the promise to be resolved to execute.

// psst.... don't forget to call the function

// getIssPosition()
//     .then(data => {
//         console.log(data)});

module.exports = {getIssPosition};
