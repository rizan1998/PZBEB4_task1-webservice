const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// global middleware
const showtime = require("./middleware/showtime");
const errHandling = require("./middleware/errHandling");

app.use(bodyParser.json());
app.use(showtime);

// route
const routesV1PostExpress = require("./routes/v1postExpress.js");
app.use("/api/v1PostExpress", routesV1PostExpress);

// handle route not found
app
  .route("*")
  .get((req, res) => {
    res.send("you're inside fallback route");
  })
  .post((req, res) => {
    res.send("you're inside fallback route");
  })
  .put((req, res) => {
    res.send("you're inside fallback route");
  })
  .delete((req, res) => {
    res.send("you're inside fallback route");
  });

app.use(errHandling);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
