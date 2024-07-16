const fs=require ("fs")
const yargs = require("yargs")

const data1= require("./data1")

yargs.command({
    command:"add",
    describe:"To add client",
    builder:{
        fname:{
            describe:"This is the first name describe in an add command",
            demondOption:true,
            type:"string",
        },
        lname:{
            describe:"This is the last name describe in an add command",
            demondOption:true,
            type:"string",
        },
    },
    handler:(x)=>{
        data1.addClient(x.id,x.fname, x.lname , x.city, x.age)
    },

})

//////////////////////////////////////////////////////////////////////////////////

yargs.command({
    command:"delete",
    describe:"To delete item",
    handler:(x)=>{
        data1.deleteData(x.id)
    }
})

//////////////////////////////////////////////////////////////////////////////////

yargs.command({
    command:"read",
    describe:"To read an item",
    builder:{
        id:{
            describe:"id describe to read an item",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        data1.readData(x.id)
    }
})

//////////////////////////////////////////////////////////////////////////////////

yargs.command({
    command:"list",
    describe:"To list items",
    handler:()=>{
        data1.listData()
    }
})
//////////////////////////////////////////////////////////////////////////////////


yargs.parse()