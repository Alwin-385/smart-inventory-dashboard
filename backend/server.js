console.log("Server file loaded");
const express = require("express");
const cors = require("cors");
let products = require("./products");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/update-stock", (req, res) => {
  const { id, newQuantity } = req.body;

  if (newQuantity < 0) {
    return res.status(400).json({ error: "Stock cannot be negative" });
  }

  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  product.stock = newQuantity;
  res.json(product);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
