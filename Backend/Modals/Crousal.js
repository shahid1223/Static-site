const mongoose = require('mongoose')
const { Schema } = mongoose

const CrousalSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'crousal'
    },
    image: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
})
const Crousal = mongoose.model('crousal', CrousalSchema);
module.exports = Crousal;