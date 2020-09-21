const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
        
    })
}

class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id = Math.random().toString();
        getProductFromFile( (products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    // I can call without instantiate (like Java)
    static fetchAll(cb) {
        getProductFromFile(cb);
    }

    static findById (id, cb) {
        getProductFromFile(products => {
            const prod = products.find(p => p.id === id);
            cb(prod);
        })
    }
}


module.exports = Product;