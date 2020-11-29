import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
	const alertContext = useContext(AlertContext);
	return (
		alertContext.alerts.length > 0 &&
		alertContext.alerts.map((alert) => (
			<div key={alert.id} className='alert-status'>
				<i className='fa fa-exclamation-circle'></i>
				<span> {alert.msg}</span>
			</div>
		))
	);
};

export default Alerts;
