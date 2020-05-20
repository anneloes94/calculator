const express = require("express");
const app = express();

const bodyParser = require("body-parser")

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
  res.sendFile(`${__dirname}/index.html`)
})

app.post("/", function(req, res){
  const num1 = Number(req.body.num1)
  const num2 = Number(req.body.num2)
  res.send(`Your answer is ${num1 + num2}`)
})

app.get("/bmicalculator", function(req, res){
  res.sendFile(`${__dirname}/bmiCalculator.html`)
})

app.post("/bmicalculator", function(req, res){
  const weightInKg = Number(req.body.weight)
  const heightInM = Number(req.body.height) / 100
  res.send(`Your BMI is ${weightInKg / (heightInM * heightInM)}`)
})

app.listen(port, function(){
  console.log(`Server listening on port ${port}`)
});