import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/layout/sidebar/Sidebar';
import Header from './components/layout/header/Header';
import Dashboard from './components/pages/Dashboard';
import EmployeeDatabase from './components/pages/EmployeeDatabase';

import './App.css';

const App = () => {
	return (
		<Router>
			<div className='main-container'>
				<div className='main-sidebar'>
					<Sidebar />
				</div>
				<div className='main-content'>
					<Header />
					<div className='content-area'>
						<Switch>
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
	);
};

export default App;
