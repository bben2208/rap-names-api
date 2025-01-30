const express = require("express");
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

app.get('/', (req, res) => {
    res.send('API is running');
  });
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.listen(PORT,(err) => {
    console.log(`server is running on ${PORT}`)
})

app.get('/api/:name', (request,response) => {
 const rapperName =  request.params.name.toLocaleLowerCase()
 if(rappers[rapperName]){
   response.json(rappers[rapperName])
 }else{
     response.json(rappers['unknown'])
 }
      
})