
const express = require('express') ;  

const bodyParser=require('body-parser'); 


const app = express(); 

app.use(bodyParser.json()) ;





app.post('/hook',(req,res)=>{
    console.log(req.body); 
})


app.listen(process.env.PORT || 3000,function(){
    console.log('now listening for req '); 
}) 

