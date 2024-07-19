const request= require("request")

const geocode= require("./data1/geocode")
const forecast = require("./data1/forecast")

const country= process.argv[2]
geocode( country ,(error, data)=>{
    console.log("ERROR", error)
    console.log("DATA", data)

    forecast( data.longtitude, data.latitude , (error, data)=>{
        console.log("ERROR : ", error)
        console.log("DATA : ", data)
    
    })
})
