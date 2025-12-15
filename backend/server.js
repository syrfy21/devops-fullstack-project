const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ================= DATABASE =================
// server.js موجود في /app
const DB_PATH = path.join(__dirname, 'database.json');

// ================= API =================
app.get('/products', (req, res) => {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    res.json(JSON.parse(data));
});

// ================= FRONTEND =================
// frontend موجود في /app/frontend
const FRONTEND_PATH = path.join(__dirname, 'frontend');

app.use(express.static(FRONTEND_PATH));

app.get('/', (req, res) => {
    res.sendFile(path.join(FRONTEND_PATH, 'index.html'));
});

// ================= START SERVER =================
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

