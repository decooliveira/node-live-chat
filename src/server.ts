import express from 'express';

const app = express();

app.get('/', (request, response) => {return response.json( {"nome":"deco"})});

app.listen(3000, ()=> {
    console.log('server running')
});