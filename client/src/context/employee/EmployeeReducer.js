import {
	ADD_EMPLOYEE,
	DELETE_EMPLOYEE,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_EMPLOYEE,
	FILTER_EMPLOYEES,
	CLEAR_FILTER,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case ADD_EMPLOYEE:
			return {
				...state,
				employees: [...state.employees, action.payload],
			};
		case UPDATE_EMPLOYEE:
			return {
				...state,
				employees: state.employees.map((employee) =>
					employee.id === action.payload.id ? action.payload : employee
				),
			};
		case DELETE_EMPLOYEE:
			return {
				...state,
				employees: state.employees.filter(
					(employee) => employee.id !== action.payload
				),
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case FILTER_EMPLOYEES:
			return {
				...state,
				filtered: state.employees.filter((employee) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return (
						employee.name.match(regex) ||
						employee.position.match(regex) ||
						employee.email.match(regex) ||
						employee.address.match(regex)
					);
				}),
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null,
			};

		default:
			return state;
	}
};
