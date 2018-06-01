const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , ctrl = require ('./controller.js')
require('dotenv').config()


const app = express();
app.use(bodyParser.json())
app.use( cors() );
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))



app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('./api/houses', ctrl.deleteHouse)


const port = 3030;
app.listen(port, () => {console.log(`Oblong Big Printers on ${port}`)})
    