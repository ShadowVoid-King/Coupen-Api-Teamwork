const {
	GetAllProducts,
	GetProductById,
	AddProduct,
	EditProduct,
	DeleteProduct,
} = require("../controllers/products");
const { CheckAuth } = require("../middelware/checkAuth");
const checkAuth = require("../middleware/checkAuth");

const router = require("express").Router();

router.get("/all-products", GetAllProducts);
router.get("/:product", GetProductById);

router.use(CheckAuth);
router.post("/add-product", checkAuth, AddProduct);
router.put("/change-data", checkAuth, EditProduct);
router.delete("/delete-product", checkAuth, DeleteProduct);

module.exports = router;
