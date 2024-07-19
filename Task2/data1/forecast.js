const request= require("request")

const forecast =( longtitude , latitude , callback )=>{

const url="http://api.weatherapi.com/v1/current.json?key=a4f9f4b855b945ffaf7215028241607&q=" + longtitude+ " , " + latitude

request({url , json : true}, (error, response)=>{
    if(error){
        callback("Low Level ERROR OCCURED", undefined )
    }
    else if(response.body.error){
        callback(response.body.error.message , undefined)
    }else {
        callback(undefined, response.body.location.name +" , "+ response.body.location.country+" it's "+ response.body.current.condition.text)
    }
})
}
module.exports= forecast