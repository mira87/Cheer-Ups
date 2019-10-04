const mongoose = require('mongoose')

let mongoURI = "";


mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/cheer-ups', { useNewUrlParser: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})


if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/cheer-ups";
  }

module.exports = mongoose