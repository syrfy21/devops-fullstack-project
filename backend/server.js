const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Database path
const DB_PATH = path.join(__dirname, 'database.json');

// ====== API: Get recommendation ======
app.get('/recommend/:meal', (req, res) => {
    const meal = req.params.meal.toLowerCase();

    const data = JSON.parse(fs.readFileSync(DB_PATH));

    const restaurant = data.find(
        r => r.meal.toLowerCase() === meal
    );

    if (restaurant) {
        res.json({
            recommended_restaurant: restaurant.restaurant,
            meal: restaurant.meal
        });
    } else {
        res.json({
            message: "No restaurant found for this meal"
        });
    }
});

// ====== Serve frontend ======
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.sendFile(
        path.join(__dirname, '../frontend', 'index.html')
    );
});

// ====== Start server ======
app.listen(3000, () => {
    console.log("Restaurant Recommendation System running on port 3000");
});

