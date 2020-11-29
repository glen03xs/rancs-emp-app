import React, { useState, useContext } from 'react';
import registerImg from './excavator-img-2.jpg';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/AuthContext';

import Alerts from '../layout/Alerts';

const Register = () => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;

	const { register } = authContext;

	const [user, setUser] = useState({
		name: '',
		position: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, position, email, password, password2 } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setAlert('Please enter all fields', 'danger');
		} else if (password !== password2) {
			setAlert('Password do not match', 'danger');
		} else {
			register({
				name,
				position,
				email,
				password,
			});
		}
	};

	return (
		<div className='start-page-container'>
			<section className='start-page'>
				<div className='start-page--col-img-wrap'>
					<img src={registerImg} alt='' />
				</div>
				<div className='start-page--col-main-content'>
					<div className='signup-page'>
						<h4 className='signup-page__title'>Register Account</h4>
						<Alerts />
						<div className='signup-page--form'>
							<form onSubmit={onSubmit}>
								<div className='form-group start-page--col-main-content__form-group'>
									<label for=''>Full Name</label>
									<input
										type='text'
										className='form-control'
										name='name'
										onChange={onChange}
									/>
								</div>
								<div className='form-group start-page--col-main-content__form-group'>
									<label for=''>Position</label>
									<input
										type='text'
										className='form-control'
										name='position'
										onChange={onChange}
									/>
								</div>
								<div className='form-group start-page--col-main-content__form-group'>
									<label for=''>Email</label>
									<input
										type='text'
										className='form-control'
										name='email'
										onChange={onChange}
									/>
								</div>
								<div className='form-group start-page--col-main-content__form-group'>
									<label for=''>Password</label>
									<input
										type='password'
										className='form-control'
										name='password'
										onChange={onChange}
									/>
								</div>
								<div className='form-group start-page--col-main-content__form-group'>
									<label for=''>Confirm Password</label>
									<input
										type='password'
										className='form-control'
										name='password2'
										onChange={onChange}
									/>
								</div>
								<div className='form-group start-page--col-main-content__form-btn-group'>
									<input
										type='submit'
										className='btn btn-start-page'
										value='SIGN UP'
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Register;
