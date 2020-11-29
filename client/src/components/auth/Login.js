import React, { useState } from 'react';
import loginImg from './excavator-img-1.jpg';
import startLogo from './start-logo.png';
import Alerts from '../layout/Alerts';

const Login = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('Login Submit');
	};

	return (
		<div className='start-page-container'>
			<section className='start-page'>
				<div className='start-page--col-img-wrap'>
					<img src={loginImg} alt='' />
					<Alerts />
				</div>
				<div className='start-page--col-main-content'>
					<div className='login-page'>
						<img
							src={startLogo}
							className='start-page--col-main-content__img'
							alt=''
						/>
						<div className='login-page--form'>
							<form onSubmit={onSubmit}>
								<div className='form-group start-page--col-main-content__form-group'>
									<label for=''>Username</label>
									<input
										type='text'
										className='form-control'
										onChange={onChange}
									/>
								</div>
								<div className='form-group start-page--col-main-content__form-group'>
									<label for=''>Password</label>
									<input
										type='password'
										className='form-control'
										onChange={onChange}
									/>
								</div>
								<div className='form-group start-page--col-main-content__form-btn-group'>
									<label for='login-form-checkbox'>
										<input
											type='checkbox'
											id='login-form-checkbox'
											className='start-form-checkbox'
										/>
										Remember me
									</label>

									<input
										type='submit'
										className='btn btn-start-page'
										value='LOGIN'
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

export default Login;
