import {
	ADD_EMPLOYEE,
	DELETE_EMPLOYEE,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_EMPLOYEE,
	FILTER_EMPLOYEES,
	CLEAR_EMPLOYEES
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case ADD_EMPLOYEE:
			return {
				...state,
				employees: [...state.employees, action.payload]
			};
			break;
		case DELETE_EMPLOYEE:
			return {
				...state,
				employees: state.employees.filter(employee => employee.id !== action.payload)
			}
		default:
			return state;
	}
}