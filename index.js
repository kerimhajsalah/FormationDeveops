const express = require('express');
const path = require('path');
const port =   5000
const app = express();
app.use(express.json());
const parkings = require('./parkings.json');
app.get('/', (req,res) => {   
    
    
  res.sendFile(path.join(__dirname+'/index.html'));

});
app.get('/add',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/update',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/parkings', (req,res) => {   
    
    
    res.status(200).json(parkings)

});
app.put('/parkings/:id', (req,res) => {  
      const id = parseInt(req.params.id)    
      let parking = parkings.find(parking => parking.id === id)  
      parking.name =req.body.name,   
      parking.city =req.body.city,  
      parking.type =req.body.type,  
             res.status(200).json(parking)
            
            })


app.get('/parkings/:id', (req,res) => {  
      const id = parseInt(req.params.id)   
       const parking = parkings.find(parking => parking.id === id)  
         res.status(200).json(parking)
        
        })
app.delete('/parkings/:id', (req,res) => {   
     const id = parseInt(req.params.id)  
       let parking = parkings.find(parking => parking.id === id)  
         parkings.splice(parkings.indexOf(parking),1)   
          res.status(200).json(parkings)})
app.listen(port, () => {    console.log(`Serveur à l'écoute",${port}`)})
 