const products = require("../products.json");

const getProducts = (req, res) => {
  if (req.query.price) {
    const getPrice = products.filter(
      products => products.price >= req.query.price
    );
    return res.status(200).send(getPrice);
  }
  res.status(200).send(products);
};

module.exports = getProducts;
