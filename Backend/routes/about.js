const express = require('express')
const About = require('../Modals/About')
const router = express.Router()
const { body, validation, validationResult } = require('express-validator')
const fetchuser = require('../middleware/fetchuser')

// 1:: Post api-path: api/about/createabout authtoken req
router.post('/createabout', fetchuser, [
    body('image', "select image").exists(),
    body('heading', "Enter heading").isLength({ min: 4 }),
    body('pera', "Enter pera").isLength({ min: 4 }),
], async (req, res) => {
    // If there are error , then this this send errors array in response 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), code: 400 })
    }

    try {
        // const { image, alt, heading, text } = req.body;
        const about = await About.create({
            image: req.body.image,
            heading: req.body.heading,
            pera: req.body.pera,
            user: req.user.id
        })
        res.status(200).json({ About: about, code: 200 })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server Error", code: 500 })
    }
})


// 2 api/about/getallabout

router.get('/getallabout', async (req, res) => {
    try {
        const about = await About.find({ About });
        res.status(200).json({ about, code: 200 })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error", code: 500 });
    }
})

// 2 route:: api/about/updateabout/:id authtoken req
router.put('/updateabout/:id', fetchuser, async (req, res) => {
    const { image, heading, pera } = req.body;
    try {
        const newAbout = {};
        if (image) { newAbout.image = image };
        if (heading) { newAbout.heading = heading };
        if (pera) { newAbout.pera = pera };
        let about = await About.findById(req.params.id);
        if (!about) {
            return res.status(404).json({ error: "Not Found", code: 404 });
        }
        let user = about.user.toString();
        if (user !== req.user.id) {
            return res.status(401).json({ error: "Not Allowed", code: 401 });
        }
        about = await About.findByIdAndUpdate(req.params.id, { $set: newAbout }, { new: true });
        res.status(200).json({ about: about, code: 200 });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Internal Server Error", code: 500 });
    }
})

//4 route api/about/deleteabout/:id authtoken req
router.delete('/deleteabout/:id', fetchuser, async (req, res) => {
    try {
        let about = await About.findById(req.params.id);
        if (!about) {
            return res.status(404).json({ error: "Not Found", code: 404 });
        }
        let user = about.user.toString();
        if (user !== req.user.id) {
            return res.status(401).json({ error: "Not Allowed", code: 401 });
        }
        about = await About.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Crousal Deleted Successfully", code: 200 })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error", code: 500 })
    }
})

module.exports = router