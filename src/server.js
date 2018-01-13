const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

const itemRoute = require('./routes/Item')

const mongoose = require('mongoose')
const config = require('./config')

mongoose.Promise = global.Promise;

mongoose.connect(config.db,{
    useMongoClient: true
}).then(() => {
    console.log('db connected')
})
.catch((err) => {
    console.log(err)
})
//static files
app.use(express.static(path.join(__dirname, 'public')))

//Settings
app.set('port', config.port)

//middlewares
app.use(cors())
app.use(bodyParser.json())

//routes
app.use('/item', itemRoute)


app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})