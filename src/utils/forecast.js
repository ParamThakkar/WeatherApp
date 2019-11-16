const request = require('request')

const forecast = (latitude,longitude,callback)=>{
  const url = 'https://api.darksky.net/forecast/Api Key/'+latitude+','+longitude+'?units=si'
  request({url , json:true},(error,{body})=>{
    if(error){
      callback('Unable to connect to weather Service')
    }else if (body.error) {
      callback('unable to find location')
    }
    else{
      callback(undefined,body.daily.data[0].summary+'\n'+"It is currently "+body.currently.temperature+" degrees out. There is "+body.currently.precipProbability+"% chance of rain")
    }
  })
}
module.exports = forecast
