const routes = require("express").Router();
const controller = require("../controllers/productController");

routes.get("/register", controller.register);

module.exports = routes;
