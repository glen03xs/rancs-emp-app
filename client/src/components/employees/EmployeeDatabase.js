import React from 'react';
import EmployeeForm from './EmployeeForm';
import Employees from './Employees';

const EmployeeDatabase = () => {
	return (
		<div className="content-area--main-wrap">
			<div className="content-area--container-fluid">
				<div className="row">
					<EmployeeForm />
					<Employees />
				</div>
			</div>
		</div>

	);
};

export default EmployeeDatabase;
