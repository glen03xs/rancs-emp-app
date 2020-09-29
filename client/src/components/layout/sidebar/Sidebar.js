import React from 'react';
import { Link } from 'react-router-dom';
import coLogo from './logo.png';
import dashboardIcon from './icons/dashboard.svg';
import groupIcon from './icons/group.svg';
import windowIcon from './icons/window.svg';
import barcodeIcon from './icons/barcode.svg';
import calendarIcon from './icons/calendar.svg';
import clutchIcon from './icons/clutch.svg';
import oilBarrelIcon from './icons/oil-barrel.svg';
import gasStationIcon from './icons/gas-station.svg';
import nineBlackTilesIcon from './icons/nine-black-tiles.svg';
import dumpTruckIcon from './icons/dump-truck.svg';
import workIcon from './icons/work.svg';

const Sidebar = () => {
	return (
		<div className='main-sidebar--wrapper'>
			<div className='sidebar-header'>
				<Link to='/'>
					<img src={coLogo} alt='' className='site-logo' />
				</Link>
			</div>
			<div className='dashboard-menu'>
				<div className='menu-item menu-item-dashboard'>
					<Link to='/' className='active'>
						<img src={dashboardIcon} className='menu-icon' alt='' />
						<h4>Dashboard</h4>
					</Link>
				</div>
				<div className='menu-item'>
					<h4>Office</h4>
					<ul>
						<li className='dashboard-main-menu-item'>
							<Link to='/employee-database'>
								<img src={groupIcon} className='menu-icon' alt='' />
								<p>Employee Database</p>
							</Link>
							<ul className='sub-menu'>
								<li>
									<Link to='./'>Add Person</Link>
								</li>
								<li>
									<Link to='./'>Edit Person</Link>
								</li>
								<li>
									<Link to='./'>View All</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to='./'>
								<img src={windowIcon} className='menu-icon' alt='' />
								<p>Trip Record</p>
							</Link>
						</li>
						<li>
							<Link to='./'>
								<img src={barcodeIcon} className='menu-icon' alt='' />
								<p>Office Inventory</p>
							</Link>
						</li>
						<li>
							<Link to='./'>
								<img src={calendarIcon} className='menu-icon' alt='' />
								<p>Timesheet</p>
							</Link>
						</li>
					</ul>
				</div>
				<div className='menu-item'>
					<h4>Motorpool</h4>
					<ul>
						<li>
							<Link to='./'>
								<img src={clutchIcon} className='menu-icon' alt='' />
								<p>Parts Inventory</p>
							</Link>
						</li>
						<li>
							<Link to='./'>
								<img src={oilBarrelIcon} className='menu-icon' alt='' />
								<p>Lubricants Inventory</p>
							</Link>
						</li>
						<li>
							<Link to='./'>
								<img src={gasStationIcon} className='menu-icon' alt='' />
								<p>Diesel Tracker</p>
							</Link>
						</li>
					</ul>
				</div>
				<div className='menu-item'>
					<h4>Truck / Equipment</h4>
					<ul>
						<li>
							<Link to='./'>
								<img src={nineBlackTilesIcon} className='menu-icon' alt='' />
								<p>Record / Inventory</p>
							</Link>
						</li>
						<li>
							<Link to='./'>
								<img src={dumpTruckIcon} className='menu-icon' alt='' />
								<p>Truck Monitoring</p>
							</Link>
						</li>
						<li>
							<Link to='./'>
								<img src={workIcon} className='menu-icon' alt='' />
								<p>Equipment Monitoring</p>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
