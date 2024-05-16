const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://ea:wlsrud123!@jwt-practice.rpxfrwx.mongodb.net/?retryWrites=true&w=majority&appName=jwt-practice'
)

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB')
})

mongoose.connection.on('error', (err) => {
  console.log(`Mongo DB connection error: ${err}`)
})

module.exports = mongoose
