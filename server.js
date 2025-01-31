const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Force CORS headers manually
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

// ✅ Ensure CORS middleware is also applied
app.use(cors());

const rappers = {
    "21 savage": {
        age: 29,
        birthName: "Shéyaa Bin Abraham-Joseph",
        birthLocation: "London, England"
    },
    "chance the rapper": { 
        age: 27,
        birthName: "Chancelor Jonathan Bennett",
        birthLocation: "Chicago, Illinois"
    },
    "unknown": {
        age: 0,
        birthName: "unknown",
        birthLocation: "unknown"
    }
};

app.get("/", (req, res) => {
    res.send("API is running");
});

app.get("/api/:name", (req, res) => {
    const rapperName = req.params.name.toLowerCase();
    res.json(rappers[rapperName] || rappers["unknown"]);
});

// ✅ Handle preflight requests (important for CORS)
app.options("*", (req, res) => {
    res.sendStatus(204);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));