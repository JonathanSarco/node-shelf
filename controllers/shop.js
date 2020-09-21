// Logic for the product Logic
const Product = require('../models/product');

exports.editProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll( (products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
}

exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    console.log(Product.findById(productId, product => {
        console.log(product);
    }));
    res.redirect('/');
}

exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll( (products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your cart',
        path: '/cart',
    });
}


exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your orders',
        path: '/orders',
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout',
    });
}