const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Item = new Schema({
    name: String,
    price: Number
},{
    collection: 'items'
})

module.exports = mongoose.model('Item', Item)