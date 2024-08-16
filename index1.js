import express from "express";
import mongoose from "mongoose";

var app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ecomm");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const productModel = mongoose.model("products", productSchema);

app.listen(8080, () => {
  console.log("Server Started on Port 8080");
});

app.get("/", async (req, res) => {
  const items = await productModel.find();
  res.status(200).json(items);
});

app.post("/", async (req, res) => {
    const { name, price } = req.body;
    const newProduct = new productModel({
      name: name,
      price: price,
    });
    await newProduct.save();
    res.status(200).json(newProduct);
  });
  
  app.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const product = req.body
    const result = await productModel.findByIdAndUpdate(id,product);
    res.status(200).json(product)
  });
  
  app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const result = await productModel.findByIdAndDelete(id);
    res.status(200).json(result);
  });
  
  app.get("/:pid", async (req,res) => {
    const pid = req.params.pid
    const limit = 3;
    const skip = (pid - 1) * limit;
    const total = await productModel.countDocuments({});
    const products = await productModel.find({}).skip(skip).limit(limit);
    res.json({products,total})
})
