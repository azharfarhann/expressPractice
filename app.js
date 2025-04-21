import express from "express";

import dotenv from "dotenv";
dotenv.config();


const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json());

app.get("/",(req,res) => {
    try {
        res.status(200).send("home page")
    } catch (error) {
        console.log(error); // terminal me error batata
        res.status(500).json({msg: error}) // response me error batata / user
    }
})

// http:/localhost:5000/register/
app.post("/register",async(req,res) => {
    try {
       console.log("Hello post api")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})
app.post("/phone/:num",(req,res) => {
    try {
        let phoneNum = req.params.num;
        console.log(phoneNum);
        res.status(200).json(phoneNum);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

app.post("/data/:name/:age/:email",(req,res) => {
    try {
        let name = req.params.name;
        let age = req.params.age;
        let email = req.params.email;
        // console.log(name,age,email);
        let person = {
            fname : name,
            age : age,
            email : email
        }
        // res.status(200).send(`hello ${name}, your age is ${age}  and your email is ${email}`)
        res.status(200).send(person)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})
// req.query ===> in url itself ==> http://localhost:5000/data/?a=2&b=4&c=10
app.get("/data",(req,res) => {
    try {
    let {a,b,c,d} = req.query;
    console.log(a,b,c,d);
    res.status(200).json({a,b,c,d})
} catch (error) {
    console.log(error);
    res.status(200).json({msg:error})
}
})

app.get("/data1",(req,res) => {
    try {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let c=  Number(req.query.c);
    let d=  Number(req.query.d);
    let e=  Number(req.query.e);
    console.log(a+b+c);
    let sum = a + b + c +d +e
    // let sum = {total: a + b +c}
    res.status(200).json(sum)
} catch (error) {
    console.log(error);
    res.status(200).json({msg:error})
}
})

// Error handler
// this errorhandler should
// be just above listen
// or in the last end of apis
// between last api and listen

app.use((req,res) => {
    res.status(404).json({msg:"Invalid Route or Invalid Method"});
    res.status
})
app.listen(PORT,() => {
    console.log(`server is running at ${PORT}`)
})