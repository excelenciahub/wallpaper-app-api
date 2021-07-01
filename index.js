require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3200;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.get("*", (req, res) => {
    res.send({ data: "Application running" });
})

app.listen(PORT, () => {
    console.log(`Application running on ${PORT} PORT`);
})