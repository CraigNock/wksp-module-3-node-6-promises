
var options = {
    uri: 'http://api.open-notify.org/iss-now.json',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

console.log(process.env.DARKSKY_API_KEY);



// Returns the current position of the ISS

function getIssPosition() {
    return rp(options)
        .then (result => {return result.iss_position.latitude +' '+result.iss_position.longitude})
        .then( result => console.log(result))
        
        .then(

            result => 
            {
            opencage
            .geocode({ q: result, key: process.env.OPENCAGE_API_KEY })
            .then(data => {
              console.log(JSON.stringify(data));
            })
            .catch(error => {
              console.log('error', error.message);
            });
        }
        


            );
        
        
}

//http://api.open-notify.org/iss-now.json

// console.log(getIssPosition());

// function getAddressPosition(address) {
//     const requestObj = {
//         key: process.env.OPENCAGE_API_KEY,
//         q: address
//     };

// }
