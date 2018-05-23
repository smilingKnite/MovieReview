var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    reviewer: {type: String, required: [true, "You must provide a name"], minlength: [2, "Review must be at least two characters"] },
    stars: {type: Number, required: [true, "You must provide a star rating"], min: 1, max: 5},
    review: {type: String, required: [true, "You must provide a review"], minlength: [3, "Review must be at least three characters"] }
}, {
    timestamps: true
});

var MovieSchema = new Schema({
    title: { type: String, required: [true, 'Movie must have a title'], minlength: [1, "Movie title must be at least one characters"] },
    reviews: [ReviewSchema],
}, {
    timestamps: true
});

module.exports = {
    model: mongoose.model('Movie', MovieSchema),
    revModel: mongoose.model('Review', ReviewSchema)
}