const express = require("express");
const app = express();
const cors = require("cors");  // Import CORS


app.use(cors());  // Enable CORS

app.use(cors({
    origin: '',  // Allows any domain
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization'
  }));
  
  // Ensure OPTIONS preflight requests are handled
  app.options('', cors());

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

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase();
    if (rappers[rapperName]) {
        response.json(rappers[rapperName]);
    } else {
        response.json(rappers['unknown']);
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
