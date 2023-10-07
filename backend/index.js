const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const cors = require("cors");
const fs = require("fs");

app.use(cors());
app.use(bodyParser.json());

// Read products from products.json
const products = require("./products.json");
const purchases = require("./purchases.json");

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/purchase", (req, res) => {
  const { productId } = req.body;
  const product = products.find((product) => product.id === productId);

  if (product) {
    purchases.push(product);

    fs.writeFileSync("./purchases.json", JSON.stringify(purchases));
    res.json({ message: "Purchase successful!", product: product });
  } else {
    res.status(404).json({ error: "Product not found." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
