const express = require('express');
const router = express.Router();
const Audio = require('../models/Audio');
const User = require('../models/User');

// include CLOUDINARY:
const uploader = require('../configs/cloudinary-setup');

router.post('/upload', uploader.single('videoURL'), (req, res, next) => {
    Audio.create({
        videoURL: req.file.secure_url,
        hashtag: req.body.hashtag,
        userId: req.user._id
    }).then(() => console.log('added'));
    // get secure_url from the file object and save it in the
    // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
    res.json({ secure_url: req.file.secure_url });
});

router.get('/upload', (req, res, next) => {
    User.findOne({ username: req.query.username || req.user.username }).then(user => {
        Audio.find({
            userId: user._id
        })
            .populate('userId')
            .then(results => {
                res.json(results);
            });
    });
});

/* get all audiofiles */

router.get('/getall-audio', (req, res, next) => {
    console.log('audio ');
    Audio.find({})
        .populate('userId')
        .then(results => {
            res.json(results);
        });
});

// get route to get all audio file and send it as json to the front end
// on the front end, do api call on componentDidMount to display the audio
module.exports = router;
