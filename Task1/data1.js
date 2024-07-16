const fs= require("fs")

const addClient=(id, fname, lname, city, age)=>{
    const allData= loadInfo()

    const duplicatedData= allData.filter((obj)=>{
        return obj.id===id
    })

    if(duplicatedData.length==0){

    allData.push({
        id:id,
        fname:fname,
        lname:lname,
        city:city,
        age:age
    })
    saveAllData(allData)
    }else{
        console.log("ERROR DUPLICATED DATA!!")
    }

}

const loadInfo= () => {
    try{
        const dataJson=fs.readFileSync("data1.json").toString()
        return JSON.parse(dataJson)
    }
    catch{
        return[]
    }

}

const saveAllData =(allData)=>{
    saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data1.json", saveAllDataJson)
}

/////////////////////////////////////////////////////////////////////////

//deleteData
const deleteData=(id)=>{
    const allData=loadInfo()
    const dataToKeep=allData.filter((obj)=>{
        return obj.id !==id
    })
    saveAllData(dataToKeep)
}


/////////////////////////////////////////////////////////////////////////

//To read Data
 
const readData=(id)=>{
    const allData= loadInfo()

    const itemNeeded= allData.find((obj)=>{
        return obj.id == id
    })
    if(itemNeeded){
        console.log(itemNeeded)
    }else{
        console.log("id Needed not found!")
    }
}


/////////////////////////////////////////////////////////////////////////

//list

const listData=()=>{
    const allData=loadInfo()
    allData.forEach((obj)=>{
        console.log(obj.fname, obj.lname)
    });
}

module.exports={
    addClient,
    deleteData,
    readData,
    listData
}

