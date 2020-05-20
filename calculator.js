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

app.listen(port, function(){
  console.log(`Server listening on port ${port}`)
});