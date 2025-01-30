const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': { 
        'age': 27,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
};

// Serve index.html if it exists
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API Endpoint
app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase();
    res.json(rappers[rapperName] || rappers['unknown']);
});

// Start Server (ONLY ONE LISTEN CALL)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
