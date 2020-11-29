import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Sidebar from './components/layout/sidebar/Sidebar';
import Header from './components/layout/header/Header';
import Dashboard from './components/pages/Dashboard';
import EmployeeDatabase from './components/employees/EmployeeDatabase';
import EmployeeState from './context/employee/EmployeeState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
	return (
		<AuthState>
			<EmployeeState>
				<AlertState>
					<Router>
						<div className='main-container'>
							<div className='main-sidebar'>
								<Sidebar />
							</div>
							<div className='main-content'>
								<Header />
								<div className='content-area'>
									<Switch>
										<Route exact path='/register' component={Register} />
										<Route exact path='/login' component={Login} />
										<Route exact path='/' component={Dashboard} />
										<Route
											exact
											path='/employee-database'
											component={EmployeeDatabase}
										/>
									</Switch>
								</div>
							</div>
						</div>
					</Router>
				</AlertState>
			</EmployeeState>
		</AuthState>
	);
};

export default App;
