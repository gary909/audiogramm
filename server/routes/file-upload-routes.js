const express = require('express');
const router = express.Router();
const Audio = require('../models/Audio');

// include CLOUDINARY:
const uploader = require('../configs/cloudinary-setup');

router.post('/upload', uploader.single('videoURL'), (req, res, next) => {
    Audio.create({
        videoURL: req.file.url,
        userId: req.user._id
    }).then(() => console.log('added'));
    // get secure_url from the file object and save it in the
    // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
    res.json({ secure_url: req.file.secure_url });
});

router.get('/upload', (req, res, next) => {
    Audio.find({
        userId: req.user._id
    }).then(results => {
        res.json(results);
    });
});

// get route to get all audio file and send it as json to the front end
// on the front end, do api call on componentDidMount to display the audio
module.exports = router;
