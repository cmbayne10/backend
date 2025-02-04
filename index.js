const express = require("express");
const { fizzBuzz } = require("./fizzBuzz");
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
