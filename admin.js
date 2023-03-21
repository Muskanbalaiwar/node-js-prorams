const path =require('path')

const express=require('express');

const productsController = require('../controllers/product')

const router=express.Router();

router.get('/add-product',productsController.getAddProduct)
router.post('/product',productsController.postAddProducts)

module.exports=router;