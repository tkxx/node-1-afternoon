const products = require("../products.json");

const getProduct = (req, res) => {
  const foundProductId = products.filter(
    products => products.id === Number(req.params.id)
  );
  if (foundProductId.length > 0) {
    res.json(foundProductId[0]);
  } else {
    res.status(500).json("Item not in list");
  }
  res.status(200).send(products);
};

module.exports = getProduct;
