const thingSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    videoURL: { type: String, required: true }
});
