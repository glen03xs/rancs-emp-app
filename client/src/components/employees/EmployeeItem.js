import React from 'react';
import empThumb from './emp-thumb.jpg'

const EmployeeItem = () => {
	return (
		<div className="employee-database--profile-item">
			<div className="employee-database--profile-item__head">
				<div className="profile-item--img-wrap">
					<img src={empThumb} className="profile-item--img-wrap__img" />
				</div>
				<div className="profile-item--primary-details">
					<p className="profile-item--primary-details__emp-no">1000103</p>
					<Link to="/">
						<p className="profile-item--primary-details__name">Jill Johnson</p>
					</Link>
					<p className="profile-item--primary-details__position">Secretary</p>
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
						<p className="profile-item--secondary-details-info-value__contact-no">09454699046</p>
						<p className="profile-item--secondary-details-info-value__email-address">jill@gmail.com</p>
						<p className="profile-item--secondary-details-info-value__address">123 Ave St. Brgy Tagay,
																Tungkong Mangga, City of San Jose del Monte, Bulacan</p>
					</div>
					<div className="profile-item--secondary-details-btn-wrap">
						<Link to="/" className="profile-item__btn-view">View</Link>
					</div>
				</div>
			</div>
		</div>
	)
};

export default EmployeeItem
