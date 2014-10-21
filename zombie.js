var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var Zombie = new Schema({
	name: { type: String, require: true, uniqueness: true, },
	health: { type: Number, require: true, min: 0, max: 300 },
	appendages: [{ type: String, enum: ['Torso', 'Head', 'Legs'], default: ['Torso', 'Head', 'Arms', 'Legs']}],
	attackLevel: { type: Number, max: 10, min: 1, default: 1},
	ninjasConsumed: { type: Number, min: 0, default: 0 }
});

module.exports = mongoose.model('Zombie', Zombie);