const express = require("express");
const { getProducts,placeOrders } = require("../Controllers/productController");

const router = express.Router();


router.get("/get", getProducts);
router.post("/placeorder",placeOrders)




module.exports = router;