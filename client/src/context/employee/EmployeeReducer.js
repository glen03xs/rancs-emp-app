import {
	ADD_EMPLOYEE,
	DELETE_EMPLOYEE,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_EMPLOYEE,
	FILTER_EMPLOYEES,
	CLEAR_EMPLOYEES,
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

		default:
			return state;
	}
};
