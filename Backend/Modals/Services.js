const mongoose = require('mongoose')
const { Schema } = mongoose

const ServicesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'services'
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
const Services = mongoose.model('services', ServicesSchema);
module.exports = Services;