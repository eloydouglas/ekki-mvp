require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const db = require('./db/db');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(process.env.PORT, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
        require('./routes/' + file)(app);
    });

    db.connection.on('error', console.error.bind(console, 'connection error:'));
    db.connection.once('open', function() {
        console.log(`Connected to env: ${process.env.NODE_ENV}`);
    });

    console.log(`API is running on port ${process.env.PORT}`);
});



module.exports = app;
