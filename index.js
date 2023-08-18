const express = require("express")
const cors = require ("cors")
const mongoose = require("mongoose")

const app = express()
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/crudoperation")
.then(()=>console.log("DB connected"))
.catch((error)=>console.log(error))

app.get("/", (req, res)=>{
res.json({message: "server is running "})
})

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`server is running at port:${PORT}`)
})