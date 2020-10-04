import React, { useReducer } from 'react';
import EmployeeContext from './EmployeeContext';
import employeeReducer from './EmployeeReducer';
import {
	ADD_EMPLOYEE,
	DELETE_EMPLOYEE,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_EMPLOYEE,
	FILTER_EMPLOYEES,
	CLEAR_EMPLOYEES
} from '../types';

const EmployeeState = () => {
	const initialState = {
		employees: [
			{
				"employeeNo": 100101,
				"name": "George C Salem",
				"position": "Admin Officer",
				"email": "george03xsgmail.com",
				"contactNumber": "641-226-7403",
				"address": "2819  Pyramid Valley Road, Waverly, Iowa ",
				"gender": "Male",
				"civilStatus": "Married",
				"dateOfBirth": "3/24/1979",
				"placeOfBirth": "Waverly, Iowa",
				"dateHired": "12/09/2018",
				"sssNumber": "479-92-1798",
				"philhealthNumber": "535290657",
			},
			{
				"employeeNo": 100102,
				"name": "Monty S Harpe",
				"position": "Office Staff",
				"email": "monty0243xs@mail.com",
				"contactNumber": "740-550-4240",
				"address": "3461  Irving Road, Westerville, Ohio",
				"gender": "Male",
				"civilStatus": "Married",
				"dateOfBirth": "6/9/1967",
				"placeOfBirth": "Iowa, TX",
				"dateHired": "10/25/2018",
				"sssNumber": "271-34-2841",
				"philhealthNumber": "5341354157",
			},
			{
				"employeeNo": 100103,
				"name": "Betty W Fisher",
				"position": "Logistics Manager",
				"email": "betty01xs@mail.com",
				"contactNumber": "817-544-4536",
				"address": "2484  Jones Street, Frisco,  Texas",
				"gender": "Female",
				"civilStatus": "Married",
				"dateOfBirth": "9/14/1962",
				"placeOfBirth": "Westerville, Iowa",
				"dateHired": "11/25/2011",
				"sssNumber": "453-82-8457",
				"philhealthNumber": "7894154157",
			},
			{
				"employeeNo": 100104,
				"name": "Dani O Maurer",
				"position": "Supervisor",
				"email": "dani14@mail.com",
				"contactNumber": "607-322-7723",
				"address": "2182 Cliffside Drive, Binghamton, New York",
				"gender": "Female",
				"civilStatus": "Married",
				"dateOfBirth": "1/1/1979",
				"placeOfBirth": "Nashville, Tennessee",
				"dateHired": "11/25/2011",
				"sssNumber": "085-74-3052",
				"philhealthNumber": "7614146157",
			},
			{
				"employeeNo": 100105,
				"name": "Derrick W Alvey",
				"position": "Manufacturing Supervisor",
				"email": "derrick015@mail.com",
				"contactNumber": "215-359-8580",
				"address": "1218  Burning Memory Lane, Philadelphia, Pennsylvania",
				"gender": "Male",
				"civilStatus": "Single",
				"dateOfBirth": "3/28/1986",
				"placeOfBirth": "Carthage, New York",
				"dateHired": "11/12/2017",
				"sssNumber": "199-80-7938",
				"philhealthNumber": "2674440099",
			},
			{
				"employeeNo": 100106,
				"name": "Madeline M Byers",
				"position": "Surveyor",
				"email": "madeline05@mail.com",
				"contactNumber": "313-736-7332",
				"address": "2762  Wildrose Lane, Detroit, Michigan",
				"gender": "Female",
				"civilStatus": "Married",
				"dateOfBirth": "8/24/1976",
				"placeOfBirth": "Beltsville, Virginia",
				"dateHired": "04/12/2018",
				"sssNumber": "223-23-5166",
				"philhealthNumber": "2674440099",
			},
		]
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	//Actions
	// Add Employee
	// Delete Employee
	// Set current Employee
	// Clear current Employee
	// update Employee
	// Filter Employee
	// Clear Filter Employee

	return (
		<EmployeeContext.Provider
			value={{
				employees: state.employees,
			}}>
		</EmployeeContext.Provider>
	)
};

export default EmployeeState
