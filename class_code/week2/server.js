const http=require("http")
const app = http.createServer((req, res)=>{
    if (req.url==="/") {
        console.log(req)
        res.end("hello from Home")
    }else{
        res.end("Page not found")
    }
})
app.listen(8000)