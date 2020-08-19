"use strict";

// database conection
var mongoose = require('mongoose');

var URI = 'mongodb://localhost/walmart';
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}); // eventos que notifican la conexión

var db = mongoose.connection;
db.once('open', function (_) {
  // conexión exitosa
  console.log("Database is connected to ", URI);
});
db.on('error', console.error.bind(console, 'connection error:'));