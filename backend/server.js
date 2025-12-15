const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// database
const DB_PATH = path.join(__dirname, 'database.json');

// API
app.get('/products', (req, res) => {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    res.json(JSON.parse(data));
});

// ✅ FRONTEND PATH (الحل هنا)
const FRONTEND_PATH = path.join(__dirname, '../frontend');

// serve static files
app.use(express.static(FRONTEND_PATH));

// root route
app.get('/', (req, res) => {
    res.sendFile(path.join(FRONTEND_PATH, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

