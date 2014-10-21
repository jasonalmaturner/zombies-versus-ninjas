var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var Ninja = new Schema({
	name: { type: String, require: true, uniqueness: true, lowercase: true },
	health: { type: Number, require: true, min: 0, max: 300 },
	weapons: { type: String, lowercase: true, enum: ['rodesian fighting sticks', 'nunchucks', 'katana', 'bo staff', 'sai'], default: 'Bo staff' },
	skillz: [{ type: String, default: 'No skillz' }],
	abilities: [{ type: String, default: 'No abilities'}],
	kills: { type: Number, min: 0, default: 0 }
})

module.exports = mongoose.model('Ninja', Ninja);