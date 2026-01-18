const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, "data", "items.json");

app.use(cors());
app.use(bodyParser.json());

// Helper function to read items from JSON
const readItems = () => {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
};

// Helper function to write items to JSON
const writeItems = (items) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2), "utf8");
};

// GET all items
app.get("/api/items", (req, res) => {
    try {
        const items = readItems();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Error reading items" });
    }
});

// GET a single item by ID
app.get("/api/items/:id", (req, res) => {
    try {
        const items = readItems();
        const item = items.find((i) => i.id === parseInt(req.params.id));
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error reading items" });
    }
});

// POST a new item
app.post("/api/items", (req, res) => {
    try {
        const items = readItems();
        const newItem = {
            id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
            ...req.body,
        };
        items.push(newItem);
        writeItems(items);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Error saving item" });
    }
});

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
