const { AddToCart, DeleteFromCart } = require("../controllers/cart");
const checkAuth = require("../middleware/checkAuth");

const router = require("express").Router();

router.use(checkAuth);
router.post("/add", checkAuth, AddToCart);
router.delete("/delete", checkAuth, DeleteFromCart);

module.exports = router;
