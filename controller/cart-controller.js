exports.cart = (req, res, next) => {
  res.json({ message: "Cart" });
};

exports.addCartItem = (req, res, next) => {
  const { addCartItemId } = req.params;
  res.json({ message: "item " + addCartItemId });
};

exports.deleteCartItem = (req, res, next) => {
  const { deletecartitemid } = req.params;
  res.json({ message:  "item " + deletecartitemid });
};
