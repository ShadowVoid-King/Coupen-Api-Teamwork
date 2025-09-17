const { AddToCart, DeleteFromCart } = require("../controllers/cart");
const { CheckAuth } = require("../middelware/checkAuth");
const checkAuth = require("../middleware/checkAuth");

const router = require("express").Router();

router.use(CheckAuth);
router.post("/add", checkAuth, AddToCart);
router.delete("/delete", checkAuth, DeleteFromCart);

module.exports = router;
