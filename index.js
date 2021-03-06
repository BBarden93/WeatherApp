const  
    dotenv = require('dotenv').config(),
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    axios = require('axios'),
    httpClient = axios.create(),
    apiKey = process.env.API_KEY,
    PORT = 3000
    
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(PORT, (err)=> {
    console.log(err || `Server running on ${PORT}`)
})
