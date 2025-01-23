import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app =express();
const PORT=process.env.PORT||9000;

app.get("/",(req,res)=>{
    res.send("Welcome to the server --GET")
})
app.post("/",(req,res)=>{
    res.send("Welcome to the server ---POST")
})
app.put("/",(req,res)=>{
    res.send("Welcome to the server ---PUT")
})
app.delete("/",(req,res)=>{
    res.send("Welcome to the server--DELETE")
})
///

app.get("/watch",(req,res)=>{
    console.log("URL call:")
    console.log(req.url)
    console.log("METHOD call:")
    console.log(req.method)
    console.log("HEADERS call:")
    console.log(req.headers)
    console.log("QUERY call:")
    console.log(req.query)
    console.log("PARAMS call:")
    console.log(req.params)
    console.log("BODY call:")
    console.log(req.body)
    res.send("Welcome to the watch list")
})

//3251227246257
app.get("/itm/:itemID",(req,res)=>{ //colum indication means the next value is a variable
    console.log("QUERY call:")
    console.log(req.query)
    console.log("PARAMS call:")
    console.log(req.params)
    console.log("BODY call:")
    console.log(req.body)
    res.send("Welcome to the item list")
})


app.listen( PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})