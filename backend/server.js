const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// path to database
const DB_PATH = path.join(__dirname, 'database.json');

// ===== API: Get all restaurants =====
app.get('/products', (req, res) => {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    const restaurants = JSON.parse(data);
    res.json(restaurants);
});

// ===== Serve Frontend =====
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// ===== Start Server =====
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

