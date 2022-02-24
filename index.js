const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Home route output here
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Circle area calculator form route here
app.get('/circleCalculator', (req, res) => {
    res.sendFile(__dirname + '/circle.html');
});

// Triangle area calculator form route here
app.get('/triangleCalculator', (req, res) => {
    res.sendFile(__dirname + '/triangle.html');
});

// Trisngle area calculator post api here
app.post('/triangle', (req, res) => {
    const height = req.body.height;
    const width = req.body.width;
    const area = height * width * 0.5;
    res.send(`Triangle area = ${area}`);
});

// Circle area calculator post api here
app.post('/circle', (req, res) => {
    const circleArea = req.body.circleArea;
    const area = Math.PI * circleArea * circleArea;
    res.send(`Triangle area = ${area}`);
});


// Server is listen here
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});