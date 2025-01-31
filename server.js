const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from Railway, fallback to 3000

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

// Home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// API route
app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase();
    if (rappers[rapperName]) {
        res.json(rappers[rapperName]);
    } else {
        res.json(rappers['unknown']);
    }
});


// Start the server (ONLY ONE `app.listen`)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
