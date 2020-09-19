const express = require('express');
const router = express.Router();

// @route 	GET api/employees
// @desc 		Get all employee information
// @access 	Private
router.get('/', (req, res) => {
	res.send('Get all employee information');
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
