import express from "express"
const app=express()


// app.get("/home",(req,res)=>{
//     res.send(req.headers.authorization)
// })

app.get("/home",(req,res)=>{
    res.send(req.query.name + req.query.age)
})

app.get("/ecomm-react/cart")


app.listen(8181)