const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//Default: Basic Calculator 
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var num1=parseInt(req.body.num1);//sau Number(req.body.num1);
    var num2=parseInt(req.body.num2);//sau Number(req.body.num2);
    var result=num1+num2;
    res.send("The result of the calculation is: "+ result);
});

//BMI Calculator
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
  });

app.post("/bmicalculator", function (req, res) {
    var weight=parseFloat(req.body.Weight);
    var height=parseFloat(req.body.Height);
    var resultBMI=weight/(height*height);
    res.send("Your BMI is: "+ resultBMI);
});

//Port listening
app.listen(3000, function () {
  console.log("Calculator running on port 3000!");
});
