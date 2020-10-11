import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import EmployeeItem from './EmployeeItem';
import EmployeeContext from '../../context/employee/EmployeeContext';
import EmployeeSearch from './EmployeeSearch';

const Employees = () => {
	const employeeContext = useContext(EmployeeContext);

	const { employees, filtered } = employeeContext;

	return (
		<div className='col-md-4'>
			<div className='card'>
				<div className='card--body card--body-hr-2'>
					<EmployeeSearch />
				</div>
				<div className='card--body__no-pd'>
					{employees.length === 0 ? (
						<div className='employee-database--profile-no-list'>
							<h4>No employee currently on the list</h4>
						</div>
					) : (
						<div className='employee-database--profile-list-wrap'>
							<TransitionGroup>
								{filtered !== null
									? filtered.map((employee) => (
											<CSSTransition
												key={employee.employeeNo}
												timeout={200}
												classNames='item'>
												<EmployeeItem employee={employee} />
											</CSSTransition>
									  ))
									: employees.map((employee) => (
											<CSSTransition
												key={employee.employeeNo}
												timeout={700}
												classNames='item'>
												<EmployeeItem employee={employee} />
											</CSSTransition>
									  ))}
							</TransitionGroup>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Employees;
