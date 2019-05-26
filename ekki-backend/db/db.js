const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});

mongoose.connection.on('error', error => {
    console.log(`An error occurred in database connection: ${error}`);
});

mongoose.connection.once('open', function() {
    console.log(`Connected to database at uri: ${process.env.DB_URI}`);
});

mongoose.connection.on('disconnected', function () {  
    console.log('\nDatabase disconnected'); 
});

module.exports = mongoose;