const mongoose = require('mongoose')
const { Schema } = mongoose

const AboutSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'about'
    },
    image: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    pera: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
})
const About = mongoose.model('about', AboutSchema);
module.exports = About;