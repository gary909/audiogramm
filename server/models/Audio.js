const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const audioSchema = new Schema({
    name: { type: String },
    userId: { type: String },
    hashtag: { type: String },
    videoURL: { type: String }
});

const Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;
