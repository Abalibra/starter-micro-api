
const express = require('express') ;  

const bodyParser=require('body-parser'); 


const app = express(); 

app.use(bodyParser.json()) ;





app.post('/hook',(req,res)=>{
    console.log(req.body); 
    console.log(typeof(req.body)
    console.log(req.body.jahez_id)            
    res.send("status code 200");
})


app.listen(process.env.PORT || 3000,function(){
    console.log('now listening for req '); 
}) 

