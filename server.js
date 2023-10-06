const express = require ('express')
const app = express()
const PORT = 8000

const maxReboBand = {
    'max rebo':{
        'name': 'Siiruulian Phantele',
        'instrument': 'Red Ball Jet Keyboard',
        'race': 'Ortolan'
    },
    'sy snooties':{
        'name':'Sy Snooties',
        'instrument':'vocals',
        'race': 'Palowick'
    },
    'droopy mcCool':{
        'name':'Snit',
        'instrument':'chidinkalu horn',
        'race':'Kitonak'
    },
    'unknown':{
        'name':'unknown',
    }

}
  

app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const maxReboBandName = (request.params.name).toLowerCase()
    if (maxReboBand [maxReboBandName]){
        response.json(maxReboBand[maxReboBandName])
    }else{
        response.json(maxReboBand['unknown'])
    }
})

app.listen(PORT,()=>{
    console.log(`The server is now running on PORT ${PORT}`)
})