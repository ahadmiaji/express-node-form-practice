const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


//for query send to browser use this method
//app.get("/userId/:id/userAge/:age", (req, res) => {
//prams create and run to the browser.
//------------------------------------------------------------------
// const id = req.params.id;
// const age = req.params.age;
// res.send(`<h1>Student id is :${id},age is ${age}</h1>`);
//------------------------------------------------------------------------
// const id= req.query.id;
// const name= req.query.name;
// const{id,name}= req.query;
// res.send(`<h1>Student name is :${name},id is ${id}</h1>`);
////for query send to browser use this method
//-----------------------------------------------------------------------------
// app.get("/", (req, res) => {
//     const id = req.header('id');
//     const name=req.header("name");
//     res.send(`<h1>Student id is :${id},name is ${name}</h1>`);
// });
//------------------------------------------------------------------------------------
//how to make post request with josn or from data
//--------------------------------------------------------------------------------------
//https://youtu.be/Y5d72kYRwLs

app.post("/register", (req, res) => {
    // const name = req.body.name;
    // const age = req.body.age;
    // res.send(`welcome ${name},You are ${age}.`);
    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`<h2>Your name is ${fullName} and age is ${age}</h2> `);

});

app.listen(port, () => {
    console.log(` server is running at http://localhost:${port}`);

});