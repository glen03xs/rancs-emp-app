const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	position: {
		type: String,
	},
	role: {
		type: String,
		default: 'editor',
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('user', UserSchema);
