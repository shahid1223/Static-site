const mongoose = require('mongoose')
const { Schema } = mongoose

const ContactUsSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    textarea: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
})
const ContactUs = mongoose.model('contactus', ContactUsSchema);
module.exports = ContactUs;