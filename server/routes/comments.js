// create post route to create a Comment in the database
const express = require('express');
const router = express.Router();
const Comments = require('../models/Comments');

router.post('/comments', (req, res, next) => {
    Comments.create({
        comment: req.body.comment,
        owner: req.user._id,
        audio: req.body.audioId
    }).then(comment => {
        console.log('added comment');
        res.json(comment);
    });
});

router.get('/comments', (req, res, next) => {
    console.log('query');
    console.log(req.query.audioId);
    Comments.find({
        audio: req.query.audioId // /comments?audioId=123123
    })
        .populate('owner')
        .then(comments => {
            res.json(comments);
        });
});
// create get route to SEE a comment from the DB
module.exports = router;
