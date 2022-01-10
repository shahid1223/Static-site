const express = require('express')
const Crousal = require('../Modals/Crousal')
const router = express.Router()
const { body, validation, validationResult } = require('express-validator')
const fetchuser = require('../middleware/fetchuser')

// 1:: Post api-path: api/auth/createuser authtoken req
router.post('/createcrousal', fetchuser, [
    body('image', "select image").exists(),
    body('alt', "Enter alt of image").exists(),
    body('heading', "Enter heading").isLength({ min: 4 }),
    body('text', "Enter text").isLength({ min: 4 }),
], async (req, res) => {
    // If there are error , then this this send errors array in response 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), code: 400 })
    }

    try {
        // const { image, alt, heading, text } = req.body;

        const crousal = await Crousal.create({
            image: req.body.image,
            alt: req.body.alt,
            heading: req.body.heading,
            text: req.body.text,
            user: req.user.id
        })
        res.status(200).json({ crousal: crousal, code: 200 })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server Error", code: 500 })
    }
})


// 2 api/crousal/getallcrousal

router.get('/getallcrousal', async (req, res) => {
    try {
        const crousal = await Crousal.find({ Crousal });
        res.status(200).json({ crousal, code: 200 })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error", code: 500 });
    }
})

// 2 route:: api/crousal/updatecrousal/:id authtoken req
router.put('/updatecrousal/:id', fetchuser, async (req, res) => {
    const { image, alt, heading, text } = req.body;
    try {
        const newCrousal = {};
        if (image) { newCrousal.image = image };
        if (alt) { newCrousal.alt = alt };
        if (heading) { newCrousal.heading = heading };
        if (text) { newCrousal.text = text };
        let crousal = await Crousal.findById(req.params.id);
        if (!crousal) {
            return res.status(404).json({ error: "Not Found", code: 404 });
        }
        let user = crousal.user.toString();
        if (user !== req.user.id) {
            return res.status(401).json({ error: "Not Allowed", code: 401 });
        }
        crousal = await Crousal.findByIdAndUpdate(req.params.id, { $set: newCrousal }, { new: true });
        res.status(200).json({ crousal: crousal, code: 200 });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Internal Server Error", code: 500 });
    }
})

//4 route api/crousal/deletecrousal/:id authtoken req
router.delete('/deletecrousal/:id', fetchuser, async (req, res) => {
    try {
        let crousal = await Crousal.findById(req.params.id);
        if (!crousal) {
            return res.status(404).json({ error: "Not Found", code: 404 });
        }
        let user = crousal.user.toString();
        if (user !== req.user.id) {
            return res.status(401).json({ error: "Not Allowed", code: 401 });
        }
        crousal = await Crousal.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Crousal Deleted Successfully", code: 200 })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error", code: 500 })
    }
})

module.exports = router