const express = require('express');
const dbConnect = require('./config/database');




dbConnect().then(() => {
    console.log('Database connected');
    const app = express();
    console.log('Server started');
    app.listen(3005, () => {
        console.log('Server is running on port 3000');
    });

    app.use(express.json());
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.get('/haadiya', (req, res) => {
        res.send('Hello World Haadiya!');
    });

    
}).catch(err => {

 }).finally(() => {

 })