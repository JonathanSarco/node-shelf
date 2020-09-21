const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

//__dirname has the absolute path from the OS to the folder.
// using path join, we do not have to add the /
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);


module.exports = router;