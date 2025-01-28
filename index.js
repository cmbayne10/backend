const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/CRUD", (req, res) => {
  res.json({ hi: "wassup loozr 😭" });
});

app.post("/POOP", (req, res) => {
  console.log(req.body);
  res.json({ response: fizzBuzz(req.body.numbers) });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function fizzBuzz(numbers) {
  return numbers;
}
/* 2 backends rest api app programming interface 
always responds in JSON {always in curly brackets}
rest api sends/recieves data 
CRUD - create, read, update, delete 
any website account comes from a database
Post is sending data to a database
Gets recieving data from database
Delete
request response
ctrl shift r = extract function */
