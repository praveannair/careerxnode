import express from "express";
const app = express();
app.listen(8080);
const logger = (req, res, next) => {
  req.msg = "Hello World";
  next(); //comment and the request will be hung
};

app.use(logger);

app.get("/", (req, res) => {
//   res.send("Student Tribe");
    res.send(req.msg);
});

app.get("/home", (req, res) => {
//   res.send("Student Tribe");
    res.send(req.msg);
});
