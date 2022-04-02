const express = require("express");
const bodyParser = require("body-parser");

const port = 2602;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", require("./routes/router"));

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
