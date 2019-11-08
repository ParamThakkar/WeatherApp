const request = require('request')

const geocode = (address,callback)=>{
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicGFyYW10aGFra2FyIiwiYSI6ImNqdzRzd29pczBxMW00YXMwemZ1NTFhd2oifQ.aKqFJbGnXVKxwfo1IRLYQg&limit=1'
  request({url,json:true},(error,{body})=>{
    if(error){
      callback('Unable to connect to location service ')
    }
    else if (body.features.length===0) {
      callback('Unable to find location.Try another search')
    }
    else {
      callback(undefined,{
        latitude:body.features[0].center[1],
        longitude:body.features[0].center[0],
        location:body.features[0].place_name
      })
    }
  })
}
 module.exports = geocode
