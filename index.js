require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");
const db = require("./models");


const app = express();

const PORT = process.env.PORT || 3200;

var corsOptions = {
    origin: "http://localhost:8081"
};

db.sequelize.sync({ force: false }).then(() => {
    console.log("Sync db.");
});

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.get("*", (req, res) => {
    res.send({ data: "Application running" });
})

app.listen(PORT, () => {
    console.log(`Application running on ${PORT} PORT`);
})