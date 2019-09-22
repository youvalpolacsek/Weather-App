const express = require('express')
const router = express.Router()
const City = require('../model/City')
const request = require(`request`)


const apiKey = "53ae8cf2f4234188a2970844191807"

router.get(`/city/:cityName`, function(req,res){
    let theCity = req.params.cityName
    request(`http://api.apixu.com/v1/current.json?key=${apiKey}&q=${theCity}`, function(err,response){
        let theData = JSON.parse(response.body)
        theData = {name: theData.location.name,
            updatedAt:theData.current.last_updated,
            temperature:theData.current.temp_c,
            condition:theData.current.condition.text,
            conditionPic:theData.current.condition.icon}
            res.send(theData)
        })
})

router.get(`/cities`, function(req,res){
    City.find({}, function(err,cities){
        res.send(cities)
    })
})

router.post(`/city`, function(req,res){
    const data = req.body
    let city = new City(data)
    city.save()
})

router.delete(`/city/:cityName`, function(req,res){
    let theCity = req.params.cityName
    City.findOneAndRemove({name:theCity}).exec(function(err,city){
        res.send(city)
    })
})

router.put("/city/:cityName", (req,res) => {
    const cityName = req.params.cityName
    const info = req.body
    City.findOneAndUpdate({ name: cityName }, { updatedAt: info.updatedAt, temperature: info.temperature, condition: info.condition, conditionPic: info.conditionPic }, (err, body) => {
        res.end()
    })
 })


module.exports = router