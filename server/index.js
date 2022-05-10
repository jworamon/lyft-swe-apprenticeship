const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const { cutString } = require('./util');

const app = express();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

// POST request for /test
app.post("/test", (req, res) => {
    try {
        const str_to_cut = req.body.string_to_cut;
        const result = cutString(str_to_cut);
        res.status(201).json({ return_string: result });
    } catch (err) {
        console.log(err);
    }
});

// send index.html for all other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// error handling middleware
app.use('/*', (req, res) => {
    res.status(404).send({ message: 'Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
