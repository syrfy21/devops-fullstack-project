const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DB_PATH = path.join(__dirname, 'database.json');

// Get all products
app.get('/products', (req, res) => {
    const data = fs.readFileSync(DB_PATH);
    const products = JSON.parse(data);
    res.json(products);
});

// Add product
app.post('/products', (req, res) => {
    const { name, price } = req.body;

    const data = fs.readFileSync(DB_PATH);
    const products = JSON.parse(data);

    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);

    fs.writeFileSync(DB_PATH, JSON.stringify(products, null, 2));

    res.json({ message: 'Product added', product: newProduct });
});
// Serve frontend
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});


app.listen(3000, () => {
    console.log("Backend running on port 3000");
});
