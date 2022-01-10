const express = require('express')
const User = require('../Modals/User')
const router = express.Router()
const { body, validation, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = "@#my-sit00012$$good"
// 1:: Post api-path: api/auth/createuser
router.post('/createuser', [
    body('name', "Enter Name").isLength({ min: 3 }),
    body('email', "Enter Email").isEmail(),
    body('password', "Enter PassWord").exists()
], async (req, res) => {
    // If there are error , then this this send errors array in response 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), code: 400 })
    }

    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email is already exist try to create accout with another creadentianls", code: 400 })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.status(200).json({ authtoken: authtoken, code: 200 })
    } catch (error) {
        res.status(500).json({ error: "Internal server Error", code: 500 })
    }
})

// 2:: api/auth/login 
router.post('/login', [
    body('email', "Enter Email").isEmail(),
    body('password', "Enter PassWord").exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
        return res.status(400).json({ errors: errors.array(), code: 400 });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: "Try to login with correct creadentials", code: 400 });
        }
        const passworcampare = await bcrypt.compare(password, user.password);
        if (!passworcampare) {
            return res.status(400).json({ errors: "Try to login with correct creadentials", code: 400 });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.status(200).json({ authtoken: authtoken, code: 200 })
    } catch (error) {
        res.status(500).json({ error: "Internal server errors", code: 500 })
    }

})

// route 3:: api/auth/getuser
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.status(200).json({ user: user })
    } catch (error) {

    }
})
module.exports = router