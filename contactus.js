const path =require('path')

const express=require('express');

const router=express.Router();

const productsController = require('../controllers/product')


router.get('/contactus',productsController.contactUs)

router.get('/success',productsController.success)



module.exports=router;