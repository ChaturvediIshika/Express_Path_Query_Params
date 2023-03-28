const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Root Path");
})

app.get('/r/:subredit',(req,res)=>{
    const {subredit}=req.params;
    res.send(`<h1>${subredit}</h1>`);
})

app.get('/search',(req,res)=>{
    const {name}=req.query;
    res.send(`<h1>Searched- ${name}</h1>`)
})

app.listen(3000,()=>{
    console.log("server is running");
})