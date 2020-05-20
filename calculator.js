const express = require("express");
const app = express();

const port = process.env.PORT || 3000

app.get("/", function(req, res){
  res.sendFile(`${__dirname}/index.html`)
})

app.post("/", function(req, res){
  res.send(`Great, you calculated something`)
})

app.listen(port, function(){
  console.log(`Server listening on port ${port}`)
});