const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect DataBase - glen.hpx@gmail.com
connectDB();

// Init Middleware
app.use(express.json({ exteded: false }));

app.get('/', (req, res) =>
	res.json({
		msg: 'Setup is good',
	})
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/employees', require('./routes/employees'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
