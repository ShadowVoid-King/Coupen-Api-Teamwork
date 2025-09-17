const { CartData } = require("../models/cart")

const AddToCart = async (req, res) => {
  try {
    const { productName, username } = req.body;

    if (!productName || !username)
      return res.status(400).send("all fields are required");

    let product = await CartData.findOne({ productName, username });
    if (product) return res.status(200).json({ message: "already in cart" });

    const newItem = new CartData({ productName, username });
    await newItem.save();

    return res.status(201).json({ message: "added to cart", newItem });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const DeleteFromCart=async(req,res)=>{
  try {
    const { productName, username } = req.body;

    if (!productName || !username)
      return res.status(400).send("all fields are required");

       const deleted = await CartData.findOneAndDelete({ productName, username });

    if (!deleted) return res.status(404).send("item not found in cart");

    return res.status(200).json({ message: "deleted from cart" });

  } catch (err) {
    return res.status(500).send(err.message);
  }
}
module.exports={AddToCart,DeleteFromCart}
