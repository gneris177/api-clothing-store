const Product = require("../models/productModel");

exports.register = async (req, res) => {
  try {
    const product = await Product.create({
      name: "name",
      desc: "desc",
      price: 3,
    });
    res.status(200).json(product);

    const fs = require("fs");
    const cloudinary = require("../config/cloudinaryConfig");

    module.exports = async (file) => {
      if (file) {
        try {
          const response = await cloudinary.uploader.upload(file.path);
          //delete upload
          const resultHandler = (err) => {
            if (err) console.log("unlink failed", err);
          };
          fs.unlink(file.path, resultHandler);

          return response;
        } catch (err) {
          console.log(err);
        }
      }
    };
  } catch (error) {
    res.status(400).json({ error });
  }
};
