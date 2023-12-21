

const express = require('express')
const app = express();
const port = 3000;

//adding middleware
app.use(express.json());

//get request
app.get("/", (req,res) =>{
    res.send(`<h1>This is home page</h1>`)
})

//post request
app.post("/car" ,(req,res)=>{
    res.send("Received a post Request")
})

app.listen(port, ()=>{
    console.log("App started");
})