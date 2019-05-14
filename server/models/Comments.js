const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    comments: { type: String },
    owner: { type: Schema.Types.ObjectId },
    audio: { type: Schema.Types.ObjectId }
});

const Comments = mongoose.model('Comments', commentsSchema);
module.exports = User;
