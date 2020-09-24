const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Employee = require('../models/Employee');

// @route 	GET api/employees
// @desc 		Get all employee information
// @access 	Private
router.get('/', auth, async (req, res) => {
	try {
		const employees = await Employee.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(employees);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route 	POST api/employees
// @desc 		Add new employee
// @access 	Private
router.post('/', (req, res) => {
	res.send('Add new employee');
});

// @route 	DELETE api/employees/:id
// @desc 		Delete employee
// @access 	Private
router.delete('/:id', (req, res) => {
	res.send('Delete employee');
});

module.exports = router;
