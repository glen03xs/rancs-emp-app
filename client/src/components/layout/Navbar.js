import React from 'react';
import PropTypes from 'prop-types';

const Navbar = () => {
	return (
		<div className='navbar bg-primary'>
			<h1>
				<i className={icon} /> {title}
			</h1>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: 'Contact Keeper',
	icon: 'fa fa-id-card-alt',
};

export default Navbar;
