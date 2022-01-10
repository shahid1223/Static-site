const express = require('express')
const Services = require('../Modals/Services')
const router = express.Router()
const { body, validation, validationResult } = require('express-validator')
const fetchuser = require('../middleware/fetchuser')

// 1:: Post api-path: api/services/createservices authtoken req
router.post('/createservices', fetchuser, [
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
        const services = await Services.create({
            image: req.body.image,
            heading: req.body.heading,
            pera: req.body.pera,
            user: req.user.id
        })
        res.status(200).json({ Services: services, code: 200 })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server Error", code: 500 })
    }
})


// 2 api/services/getallServices

router.get('/getallServices', async (req, res) => {
    try {
        const services = await Services.find({ Services });
        res.status(200).json({ services, code: 200 })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error", code: 500 });
    }
})

// 2 route:: api/services/updateServices/:id authtoken req
router.put('/updateServices/:id', fetchuser, async (req, res) => {
    const { image, heading, pera } = req.body;
    try {
        const newServices = {};
        if (image) { newServices.image = image };
        if (heading) { newServices.heading = heading };
        if (pera) { newServices.pera = pera };
        let services = await Services.findById(req.params.id);
        if (!services) {
            return res.status(404).json({ error: "Not Found", code: 404 });
        }
        let user = services.user.toString();
        if (user !== req.user.id) {
            return res.status(401).json({ error: "Not Allowed", code: 401 });
        }
        services = await Services.findByIdAndUpdate(req.params.id, { $set: newServices }, { new: true });
        res.status(200).json({ Services: services, code: 200 });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Internal Server Error", code: 500 });
    }
})

//4 route api/services/deleteServices/:id authtoken req
router.delete('/deleteservices/:id', fetchuser, async (req, res) => {
    try {
        let services = await Services.findById(req.params.id);
        if (!services) {
            return res.status(404).json({ error: "Not Found", code: 404 });
        }
        let user = services.user.toString();
        if (user !== req.user.id) {
            return res.status(401).json({ error: "Not Allowed", code: 401 });
        }
        services = await Services.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Services Deleted Successfully", code: 200 })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error", code: 500 })
    }
})

module.exports = router