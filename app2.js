import express from "express";

const app = express()
const PORT = 5000;

app.use(express.json())  /// Post method

app.post("/r",(req,res) => {
    try {
        let fname = req.body.fname // json ==> object
        console.log(req.body)
        console.log(req.body)
        console.log(typeof userInput); // object
        // let age = req.body.age;
        // console.log(age)
        res.status(200).json({fname}) // object ==> json
        // res.status(200).json({data:data}) // object ==> json
    } catch (error) {
        console.log(error);
        // res.status(500).json({error :error})
        res.status(500).json(error)
    }
})
app.get("/q",(req,res) => {
    try {
    //     let a = req.query.a
    //     let b = req.query.b
    //     // let sum = a + b
    //     let sum1= Number(a) + Number(b)
    //     res.status(200).json({sum1})
        let {a,b,c,d} = req.query;
    console.log(a,b,c,d);
    res.status(200).json({a,b,c,d})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
/*
 :num ===> is in dynamic format, we can use any number instead of :num  below like /phone/:8297765919 ===> output is 8297765919
*/
app.post("/phone/:num",(req,res) => {
    try {
        let phoneNum = req.params.num;
        console.log(phoneNum);
        res.status(200).json({phoneNum});
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

app.use((req,res) => {
    res.status(404).send("either server or route is wrong")
})
app.listen(PORT,() => {
    console.log(`server is running at ${PORT}`);
})