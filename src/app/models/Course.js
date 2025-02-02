const { default: mongoose, model } = require("mongoose");
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, require: true, },
    description: {type: String, },
    image: {type: String, },
    videoID: {type: String, require: true, },
    level: {type: String, },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
})

module.exports = mongoose.model("Course", Course)