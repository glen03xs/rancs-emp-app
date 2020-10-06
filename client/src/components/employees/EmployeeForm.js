import React from 'react';
import profilPicPrev from './emp-thumb.jpg';

const EmployeeForm = () => {
	return (
		<div className="col-md-8">
			<div className="card">
				<div className="employee-database--main">
					<div className="card--header">
						<h3 className="card--header__title-md">Add Employee</h3>
					</div>
					<div className="card--body">
						<div className="employee-database--main__profile-id-name-wrap">
							<div className="profile-pic-upload">
								<label htmlFor="" className="profile-pic-upload--label">Profile Picture</label>
								<div className="profile-pic-upload--input">
									<div className="profile-pic-upload--input__preview" style={{ backgroundImage: `url(${profilPicPrev})` }}>
									</div>
									<label htmlFor="profile-pic-upload-btn" className="profile-pic-upload--input__upload">
										<i className="fa fa-pencil"></i>
										<input type="file" name="profile-avatar" id="profile-pic-upload-btn"
											accept=".png, .jpg, jpeg" />
										<input type="hidden" name="profile-avatar-remove" />
									</label>
								</div>
							</div>
							<div className="name-emp-no">
								<div className="name-emp-no--form-group form-group-inline">
									<label htmlFor="" className="name-emp-no--form-group__label emp-no-label">Employee Id:</label>
									<input type="number" className="name-emp-no--form-group__field form-control" />
								</div>
								<div className="name-emp-no--form-group form-group-inline">
									<label htmlFor="" className="name-emp-no--form-group__label">Name:</label>
									<input type="text" className="name-emp-no--form-group__field form-control" />
								</div>
							</div>
						</div>
						<div className="employee-database--main__other-info">
							<div className="other-info-line position-contact-no-line">
								<div className="other-info-line--form-group form-group-inline position-contact-no-line--left">
									<label htmlFor="" className="other-info-line--form-group__label">Position:</label>
									<input type="text" className="other-info-line--form-group__field form-control" />
								</div>
								<div className="other-info-line--form-group form-group-inline position-contact-no-line--right">
									<label htmlFor="" className="other-info-line--form-group__label">Contact
															Number:</label>
									<input type="text" className="other-info-line--form-group__field form-control" />
								</div>
							</div>
							<div className="other-info-line gender-email-line">
								<div className="other-info-line--form-group form-group-inline gender-email-line--left">
									<label htmlFor="" className="other-info-line--form-group__label">Gender:</label>
									<input type="text" className="other-info-line--form-group__field form-control" />
								</div>
								<div className="other-info-line--form-group form-group-inline gender-email-line--right">
									<label htmlFor="" className="other-info-line--form-group__label">Email
															Addresss:</label>
									<input type="text" className="other-info-line--form-group__field form-control" />
								</div>
							</div>
							<div className="other-info-line address-line">
								<div className="other-info-line--form-group form-group-inline address-line--single">
									<label htmlFor="" className="other-info-line--form-group__label">Address:</label>
									<input type="text" className="other-info-line--form-group__field form-control" />
								</div>
							</div>
							<div className="other-info-line civil-status-dob-line">
								<div className="other-info-line--form-group form-group-inline civil-status-dob-line--left">
									<label htmlFor="" className="other-info-line--form-group__label">Civil Status:</label>
									<input type="text" className="other-info-line--form-group__field form-control" />
								</div>
								<div className="other-info-line--form-group form-group-inline civil-status-dob-line--right">
									<label htmlFor="" className="other-info-line--form-group__label">Date of
															Birth:</label>
									<input type="text" className="other-info-line--form-group__field form-control" />
								</div>
							</div>
							<div className="other-info-line pob-doh-line">
								<div className="other-info-line--form-group form-group-inline pob-doh-line--left">
									<label htmlFor="" className="other-info-line--form-group__label">Place of Birth:</label>
									<input type="text" className="other-info-line--form-group__field form-control" />
								</div>
								<div className="other-info-line--form-group form-group-inline pob-doh-line--right">
									<label htmlFor="" className="other-info-line--form-group__label">Date Hired:</label>
									<input type="text" className="other-info-line--form-group__field form-control" />
								</div>
							</div>
							<div className="other-info-line sss-philhealth-no-dob-line">
								<div className="other-info-line--form-group form-group-inline sss-philhealth-no-line--left">
									<label htmlFor="" className="other-info-line--form-group__label">SSS Number:</label>
									<input type="text" className="other-info-line--form-group__field form-control" />
								</div>
								<div className="other-info-line--form-group form-group-inline sss-philhealth-no-line--right">
									<label htmlFor="" className="other-info-line--form-group__label">Philhealth No.:</label>
									<input type="text" className="other-info-line--form-group__field form-control" />
								</div>
							</div>
							<div className="other-info-line btn-wrap-line">
								<button className="btn btn-main"> Add</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EmployeeForm
