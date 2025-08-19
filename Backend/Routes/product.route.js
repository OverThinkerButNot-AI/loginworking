const express = require("express");
const { getAllProductController } = require(".../controller/product.controller");

const router = express.Router();

router.get("/product/all", getAllProductController);

module.exports = router;
