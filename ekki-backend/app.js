const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const config = require('./config/config');



const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(config.port, err => {
    if (err) {
            console.log(err);
            process.exit(1);
    }

    require('./db/db');

    fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
            require('./routes/' + file)(app);
    });

    console.log(`API is running on port ${config.port}`);
});



module.exports = app;
