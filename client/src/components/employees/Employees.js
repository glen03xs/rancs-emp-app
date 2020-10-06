import React, { useContext } from 'react'
import EmployeeItem from './EmployeeItem'
import EmployeeContext from '../../context/employee/EmployeeContext';

const Employees = () => {
	const employeeContext = useContext(EmployeeContext);

	const { employees } = employeeContext;

	return (
		<div className="col-md-4">
			<div className="card">
				<div className="card--body card--body-hr-2">
					<div className="employee-database--search-wrap">
						<button className="btn-search btn-search-emp-database">
							<i className="fa fa-search"></i>
						</button>
						<input type="text" className="search-field" />
					</div>
				</div>
				<div className="card--body__no-pd">
					<div className="employee-database--profile-list-wrap">
						{employees.map((employee) => (
							<EmployeeItem key={employee.employeeNo} employee={employee} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}


export default Employees
