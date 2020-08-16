
// database conection
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/walmart';
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// eventos que notifican la conexión
const db = mongoose.connection;

db.once('open', _ => { // conexión exitosa
    console.log("Database is connected to ", URI);
});

db.on('error', console.error.bind(console, 'connection error:'));