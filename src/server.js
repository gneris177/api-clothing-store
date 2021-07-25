const app = require("express")();
const PORT = 7000 || process.env.PORT;

const db = require("./database/config");


const registerRoute = require('./routes/productRouter');


app.use(registerRoute);

app.listen(PORT, () => console.log("On http://localhost:7000"));