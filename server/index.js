const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const { cutString } = require('./util');

const app = express();

// body parsing middleware
app.use(express.json());

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// POST request for /test
app.post("/test", (req, res, next) => {
    try {
        const str_to_cut = req.body.string_to_cut;
        if (typeof str_to_cut !== 'string') {
            res.status(400).json({ message: 'Invalid Argument: string_to_cut must be a string' });
        }
        const result = cutString(str_to_cut);
        res.status(201).json({ return_string: result });
    } catch (err) {
        res.status(500).json({ message: `Error: ${err.message}` });
    }
});

// error handling middleware
app.use('*', (req, res) => {
    res.status(404).send({ message: 'Not Found' });
});



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
