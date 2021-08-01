const uploadCloudnary = require("../services/uploadCloudnary");
const Product = require("../models/productModel");

exports.add = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    const product = await Product.create({
      name: name,
      description: description,
      price: price,
      category: category,
    });

    //upload img in cloud
    const cloudImg = await uploadCloudnary(req.file);

    //add url img


    res.status(200).json({ message: "sucess" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

exports.products = async (req, res) => {
  try {
    const products = await Product.find().catch((err) =>
      res.status(400).json({ error: err })
    );
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: "erro" });
  }
};
