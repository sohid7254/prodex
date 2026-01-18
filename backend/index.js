require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fdcjmvl.mongodb.net/?appName=Cluster0`;
const DB_NAME = "prodex7254";

app.use(cors());
app.use(bodyParser.json());

let db;

// MongoDB Connection using Native Driver
async function connectDB() {
    try {
        if (!MONGODB_URI) {
            console.error("FATAL ERROR: MONGODB_URI is not defined in .env file!");
            return;
        }
        console.log("Attempting to connect to MongoDB Atlas...");
        const client = await MongoClient.connect(MONGODB_URI);
        db = client.db(DB_NAME);
        console.log(`Successfully connected to MongoDB database: ${DB_NAME}`);
    } catch (err) {
        console.error("FATAL ERROR: Could not connect to MongoDB:", err.message);
        if (err.message.includes("IP")) {
            console.error("HINT: Ensure your current IP address is whitelisted in MongoDB Atlas Network Access settings.");
        }
    }
}

connectDB();

// Middleware to ensure DB is connected
const checkDB = (req, res, next) => {
    if (!db) {
        return res.status(503).json({ message: "Database not connected yet. Please try again in a few seconds." });
    }
    next();
};

// GET all items
app.get("/api/items", checkDB, async (req, res) => {
    try {
        const items = await db.collection("items").find().sort({ _id: -1 }).toArray();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items", error: error.message });
    }
});

// GET a single item by ID
app.get("/api/items/:id", checkDB, async (req, res) => {
    try {
        const item = await db.collection("items").findOne({ _id: new ObjectId(req.params.id) });
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching item", error: error.message });
    }
});

// POST a new item
app.post("/api/items", checkDB, async (req, res) => {
    try {
        const newItem = {
            ...req.body,
            createdAt: new Date(),
        };
        const result = await db.collection("items").insertOne(newItem);
        res.status(201).json({ ...newItem, _id: result.insertedId });
    } catch (error) {
        res.status(500).json({ message: "Error saving item", error: error.message });
    }
});

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
