const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/tasksDatabase').then(() => {
    console.log('Successfully connected to MongoDB.')
}).catch((err) => {
    console.log('Connection error', err.message)
})

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db