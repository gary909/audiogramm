const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    comment: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    audio: { type: Schema.Types.ObjectId, ref: 'Audio' }
});

const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;
