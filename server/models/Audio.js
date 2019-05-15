const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const audioSchema = new Schema({
    name: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    hashtag: { type: String, default: 'kittensounds' },
    videoURL: { type: String }
});

const Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;
