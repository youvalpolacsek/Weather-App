const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CitySchema = new Schema({
    name: String,
    updatedAt: Date,
    temperature: Number,
    condition: String,
    conditionPic: String
})

const City = mongoose.model("City", CitySchema)

module.exports = City