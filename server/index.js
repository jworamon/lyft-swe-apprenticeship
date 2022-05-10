const express = require('express');
const PORT = process.env.PORT || 3001;
const { cutString } = require('./util');

const app = express();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST /test
app.post("/test", (req, res) => {
    try {
        const str_to_cut = req.body.string_to_cut;
        const result = cutString(str_to_cut);
        res.status(201).json({ return_string: result });
    } catch (err) {
        console.log(err);
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
