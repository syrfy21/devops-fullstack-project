const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DB_PATH = path.join(__dirname, 'database.json');

/* =========================
   API: Get all restaurants
   ========================= */
app.get('/restaurants', (req, res) => {
    const data = fs.readFileSync(DB_PATH);
    const restaurants = JSON.parse(data);
    res.json(restaurants);
});

/* =========================
   API: Recommend restaurant
   ========================= */
app.get('/recommend', (req, res) => {
    const meal = req.query.meal?.toLowerCase();

    if (!meal) {
        return res.json({ restaurant: "Please enter a meal" });
    }

    const data = JSON.parse(fs.readFileSync(DB_PATH));
    const result = data.find(item => item.meal.toLowerCase() === meal);

    if (result) {
        res.json({ restaurant: result.restaurant });
    } else {
        res.json({ restaurant: "No recommendation found" });
    }
});

/* =========================
   Serve Frontend
   ========================= */
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

/* =========================
   Start Server
   ========================= */
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

