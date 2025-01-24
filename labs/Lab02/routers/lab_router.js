import express from "express"

const router =express.Router();


router.get("/",(req,res)=>{
    res.send("Welcome to the lab router")
})
router.get("/name",(req,res)=>{
    res.send("My name is Ayobami Ojo")
})

router.get("/greeting",(req,res)=>{
    res.send("Hello Ayobami Ojo, wth Student ID- N1675441")
})

router.get("/add/:x/:y",(req,res)=>{
 
    let x= parseFloat( req.params.x);
    let y =parseFloat(req.params.y);
    res.send(`${x+y}`)
})

router.get("/calculate/:x/:y/:z",(req,res)=>{
 
    let x= parseFloat( req.params.x);
    let y =parseFloat(req.params.y);
    let operation = req.params.z;
    let result;

    switch (operation) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        case "**":
            result = x ** y;
            break;
        default:
            return res.send("Wrong Operation")
    }

    res.send(`Result of ${operation} operation of ${x} and ${y} is : ${result}`);
})

export default router;