const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	employeeNo: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	position: {
		type: String,
	},
	email: {
		type: String,
	},
	contactNumber: {
		type: String,
	},
	dateOfBirth: {
		type: String,
	},
	address: {
		type: String,
	},
	gender: {
		type: String,
	},
	civilStatus: {
		type: String,
	},
	dateOfBirth: {
		type: Date,
	},
	placeOfBirth: {
		type: Date,
	},
	dateHired: {
		type: Date,
	},
	sssNumber: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('employee', EmployeeSchema);
