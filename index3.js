import express from "express";
const app = express();
app.use(express.json()); //parses req.body to json
const getCity = (req, res, next) => {
  req.body.city = "Chennai";
  next(); //comment and the request will be hung
};
// app.use(getCity);
// app.post("/", (req, res) => {
//   res.json(req.body);
// });
app.post("/city", getCity, (req, res) => {
  res.json(req.body);
});
app.post("/country", getCity, (req, res) => {
  res.json(req.body);
});
app.post("/state", (req, res) => {
    res.json(req.body);
  });

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
