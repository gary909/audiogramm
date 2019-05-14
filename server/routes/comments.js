// create post route to create a Comment in the database
const express = require('express');
const router = express.Router();
const Comments = require('../models/Comments');

router.post('/comments', (req, res, next) => {
    Comments.create({
        comment: req.body.comment,
        owner: req.user._id
    }).then(() => console.log('added comment'));
});
// create get route to SEE a comment from the DB
module.exports = router;
