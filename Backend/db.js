const mongoose = require('mongoose')
const MONGOURI = "mongodb+srv://shahid:shahid@cluster0.zbodk.mongodb.net/my-site?retryWrites=true&w=majority"

const connectTOMongo = () => {
    mongoose.connect(MONGOURI, () => {
        console.log("Connected successfully")
    })
}

module.exports = connectTOMongo