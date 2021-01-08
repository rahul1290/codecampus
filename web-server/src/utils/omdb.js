const request = require('request')


const omdb = (movie,callback) => {
    url = `http://www.omdbapi.com/?t=${movie}&apikey=7f6baddd`;
    request({ url: url, json: true }, (error, response) => {
        if(error){
            callback('Unable to connect to omdb services!', undefined)
        } else {
            callback(undefined, response)
        }
    })
}

module.exports = omdb