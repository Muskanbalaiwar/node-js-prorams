const fs=require('fs');
const path=require('path');

const products=[]

module.exports=class product{
    constructor(t){
        this.title=t;
    }

    save(){
       const p=path.join(__dirname,'../','data','products.json');

       fs.readFile(p,(err,fileData)=>{
        let pros=[];
        if(!err){
            pros=JSON.parse(fileData)
        }
       pros.push(this);
       fs.writeFile(p,JSON.stringify(pros),(err)=>{
        console.log(err);
       })

       })
       
    }

    static fetchAll(cb){
        const p=path.join(__dirname,'../','data','products.json');

        fs.readFile(p,(err,fileData)=>{
            if(err){ cb( []);}
            cb((fileData)) ;
        })
}}