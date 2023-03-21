const path=require('path');

const express=require('express');

const router=express.Router();
router.get('/',(req,res,next)=>{

    console.log('Inside the another Middleware');
  res.sendFile(path.join(__dirname,'../','views','shop.html'))
    //next();
})

module.exports=router;