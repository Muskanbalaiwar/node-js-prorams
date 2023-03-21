const products=[];
const path =require('path')

exports.getAddProduct=(req,res,next)=>{

    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
}


exports.postAddProducts=(req,res,next)=>{

products.push({title:req.body.title});
res.redirect('/')
}

exports.getProduct=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
}

exports.contactUs=(req,res,next)=>{

    console.log('Inside the  us Middleware');
    res.sendFile(path.join(__dirname,'../','views','contactDes.html')) 
}

exports.success=(req,res,next)=>{
    console.log('Inside the  success Middleware');
    res.sendFile(path.join(__dirname,'../','views','success.html'))
   
  
}