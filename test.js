
const path=require('path');
const express=require('express')

const app=express();

const adminRouter=require('./route/admin');

const shopRouter=require('./route/shop');

const contact=require('./route/contact');

const contus=require('./route/contactus');

const bodyparser=require('body-parser')


app.use(express.static(path.join(__dirname,'public')))

app.use(bodyparser.urlencoded({extended:false}))

app.use(adminRouter);
app.use(shopRouter);
app.use(contact);
app.use(contus)



app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3001)

console.log('Muskan gupta')
