import React, { useContext, useEffect, useRef } from 'react';
import EmployeeContext from '../../context/employee/EmployeeContext';

const EmployeeSearch = () => {
	const employeeContext = useContext(EmployeeContext);
	const text = useRef('');

	const { filterEmployees, clearFilter, filtered } = employeeContext;

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});

	const onChange = (e) => {
		if (text.current.value !== '') {
			filterEmployees(e.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<div className='employee-database--search-wrap'>
			<button className='btn-search btn-search-emp-database'>
				<i className='fa fa-search'></i>
			</button>
			<input
				ref={text}
				type='text'
				className='search-field'
				placeholder='Search Employee...'
				onChange={onChange}
			/>
		</div>
	);
};

export default EmployeeSearch;
