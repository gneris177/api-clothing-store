const routes = require("express").Router();
const controller = require("../controllers/productController");

routes.post("/register", controller.register);

module.exports = routes;
