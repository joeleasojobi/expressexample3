var express=require('express')

var app=express()

app.get('/',(req,res)=>{
    res.send("hello")
})
app.get('/firstpage',(req,res)=>{
    res.send("firstpage")
})
app.get('/secondpage',(req,res)=>{
    res.send("secondpage")
})

app.listen(3000,()=>{
    console.log("Server started");
})