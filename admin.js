const path =require('path')

const express=require('express');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{

    console.log('Inside the  Middleware');
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
   
    //next();
})

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

module.exports=router;