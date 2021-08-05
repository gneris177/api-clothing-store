const uploadCloudnary = require("../services/uploadCloudnary");
const Product = require("../models/productModel");

exports.add = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const product = await Product.create({
      name: name,
      description: description,
      price: price,
    });

    //upload img in cloud
    const cloudImg = await uploadCloudnary(req.file);

    //add url img
    const productImgUrl = await Product.findByIdAndUpdate(
      product.id,
      { imgUrl: cloudImg.url },
      { upsert: true, setDefaultsOnInsert: true, useFindAndModify: false }
    )

    res.status(200).json({ message: "sucess" });
  } catch (err) {
    res.status(400).json('erroooooooooooou');
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
