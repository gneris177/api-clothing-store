const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./database/config");

require("dotenv").config();
app.use(cors());

const PORT = process.env.PORT || 8877;

//routes
const produtoRouter = require("./routes/productRouter");
app.use(produtoRouter);

app.use(express.json());
app.listen(8000, () => console.log("Server ON"));