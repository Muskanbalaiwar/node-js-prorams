const path =require('path')

const express=require('express');

const router=express.Router();




router.get('/contactus',(req,res,next)=>{

    console.log('Inside the  us Middleware');
    res.sendFile(path.join(__dirname,'../','views','contactDes.html'))
   
    
})

router.get('/success',(req,res,next)=>{

    console.log('Inside the  success Middleware');
    res.sendFile(path.join(__dirname,'../','views','success.html'))
   
  
})



module.exports=router;