const express = require("express")

const app= express()
const port =process.env.PORT || 4000

const path = require("path")

const pathDirectory = path.join(__dirname, '../public')
app.use(express.static(pathDirectory))

// app.get('/prices', (req,res)=>{
//     res.send("prices page")
// })
app.get ( '/prices',  (req,res) =>{
    res.send("prices page")
}) 

app.set('view engine', 'hbs');

const viewsDirectory= path.join(__dirname, '../temp1/views')
app.set("views", viewsDirectory)

var hbs = require('hbs')

const partialsPath = path.join(__dirname, '../temp1/partials')
hbs.registerPartials(partialsPath)


app.get('/',(req, res)=>{
    res.render('index',{
        title:"Home Page",
        describe:"This is the home page"
    })
})

app.get('/service',(req, res)=>{
    res.render('service', {
        title:"SERVICE",
        desc: "Get items You Need",
        location:"Fayoum",
    
        
    }
    )
})


app.get('/team',(req, res)=>{
    res.render('team', {
        title:"TEAM",
        desc: "We are at your service",
        city:"All over the world",
        age: "The twenties and thirties"
        
    }
    )
})

app.get('/response',(req, res)=>{
    res.render('response', {
        title:"RESPONSE",
        desc: "Your request will be responded to ",
        city:"All over the world",
    }
    )
})

app.get('/welcome',(req, res)=>{
    res.render('welcome', {
        title:"WELCOME",
        desؤ: "We are happy to have you visit",
        city:"All over the world",
        
        
    }
    )
})

app.get('/about',(req, res)=>{
    res.render('about', {
        title:"ABOUT US",
        desc: "We are an organization that strives to serve you",
        city:"All over the world",
    }
    )
})


app.listen( port, ()=>{
    console.log("App is listening on port 4000")
})