const express = require('express')
const ContactUs = require('../Modals/ContactUs')
const { body, validation, validationResult } = require('express-validator')
const router = express.Router()

// 1:: Post api-path: api/contactus/contactus
router.post('/contactus', [
    body('fullname', "Enter fullname").isLength({ min: 3 }),
    body('email', "Enter Email").isEmail(),
    body('textarea', "Enter tell us about yourself").exists()
], async (req, res) => {
    // If there are error , then this this send errors array in response 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), code: 400 })
    }

    try {

        let contactus = await ContactUs

        contactus = await ContactUs.create({
            fullname: req.body.fullname,
            email: req.body.email,
            textarea: req.body.textarea,
        })

        res.status(200).json({ message: "thank you", code: 200 })
    } catch (error) {
        res.status(500).json({ error: "Internal server Error", code: 500 })
    }
})


// route 3:: api/contactus/getcontactus
router.get('/getcontactus', async (req, res) => {
    try {
        let contactus = await ContactUs.find()
        res.status(200).json({ contactus: contactus, code: 200 })
    } catch (error) {
        res.status(500).json({ error: "Internal server Error", code: 500 })
    }
})
module.exports = router