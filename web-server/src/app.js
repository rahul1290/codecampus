const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const omdb = require('./utils/omdb')
const path = require('path');
const cors = require('cors')
const app = express();
const publicDirPath = path.join(__dirname, './../public');

app.use('/static', express.static(publicDirPath));
const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
});


app.get('/omdb',(req,res) => {
    if(!req.query.search){
        return res.send({
            error :'Enter movie name'
        })
    }

    omdb(req.query.search,(error,response) => {
        if(error){
            return res.send({ error })
        }
        res.send({
            'Title' : response.body.Title,
            'Poster' : response.body.Poster,
            'Rating' : response.body.Ratings,
            'Released' : response.body.Released,
            'Duration' : response.body.Runtime,
            'ImdbRating' : response.body.imdbRating
        })
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})