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
    console.log(`API is running on port ${process.env.PORT}`);
});

process.on('SIGINT', function() {  
    db.connection.close(function () { 
        console.log('Database disconnected through app termination');
        process.exit(0); 
    }); 
});

module.exports = app;
