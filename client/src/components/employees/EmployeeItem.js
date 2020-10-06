import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import empThumb from './emp-thumb.jpg'

const EmployeeItem = ({ employee }) => {

	const { employeeNo, name, position, contactNumber, email, address } = employee;

	return (
		<div className="employee-database--profile-item">
			<div className="employee-database--profile-item__head">
				<div className="profile-item--img-wrap">
					<img src={empThumb} className="profile-item--img-wrap__img" />
				</div>
				<div className="profile-item--primary-details">
					<p className="profile-item--primary-details__emp-no">{employeeNo}</p>
					<Link to="/">
						<p className="profile-item--primary-details__name">{name}</p>
					</Link>
					<p className="profile-item--primary-details__position">{position}</p>
				</div>
				<Link to="/" className="profile-item--btn-edit">Edit</Link>
			</div>
			<div className="employee-database--profile-item__body">
				<div className="profile-item--secondary-details-wrap">
					<div className="profile-item--secondary-details-info-title">
						<p className="profile-item--secondary-details-info-title__contact-no">Contact No.:</p>
						<p className="profile-item--secondary-details-info-title__email-address">Email Address:</p>
						<p className="profile-item--secondary-details-info-title__address">Address:</p>
					</div>
					<div className="profile-item--secondary-details-info-value">
						<p className="profile-item--secondary-details-info-value__contact-no">{contactNumber}</p>
						<p className="profile-item--secondary-details-info-value__email-address">{email}</p>
						<p className="profile-item--secondary-details-info-value__address">{address}</p>
					</div>
					<div className="profile-item--secondary-details-btn-wrap">
						<Link to="/" className="profile-item__btn-view">View</Link>
					</div>
				</div>
			</div>
		</div>
	)
};

EmployeeItem.propTypes = {
	employee: PropTypes.object.isRequired,
}

export default EmployeeItem;
