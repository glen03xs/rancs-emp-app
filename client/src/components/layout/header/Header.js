import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from './icons/profile-img.png';
import reorderOptionIcon from './icons/reorder-option.svg';
import signOutOptionIcon from './icons/sign-out-option.svg';
import cogWheelIcon from './icons/cog-wheel.svg';

const Header = () => {
	return (
		<div className='main-content-header'>
			<div className='main-content-header--top'>
				<div className='main-content-header--top__left-wrap'>
					<div className='main-content-header--top__left-wrap-min-btn'>
						<button>
							<i className='fa fa-chevron-left'></i>
						</button>
					</div>
					<div className='main-content-header--top__left-wrap-search-bar'>
						<button className='header-btn-search'>
							<i className='fa fa-search'></i>
						</button>
						<input type='text' className='header-search-field' />
					</div>
				</div>
				<div className='main-content-header--top__right-wrap'>
					<div className='main-content-header--top__right-wrap-notification'>
						<Link
							to='./'
							className='main-content-header--top__right-wrap-icon header-notification-icon'>
							<img src={reorderOptionIcon} alt='' />
						</Link>
					</div>
					<div className='main-content-header--top__right-wrap-profile'>
						<Link to='./' className='profile-img'>
							<img src={profileImg} className='menu-icon' alt='' />
							<span>Account Name</span>
						</Link>
					</div>
					<div className='main-content-header--top__right-wrap-notification'>
						<Link
							to='./'
							className='main-content-header--top__right-wrap-icon header-sign-out-icon'>
							<img src={signOutOptionIcon} className='menu-icon' alt='' />
						</Link>
					</div>
				</div>
			</div>
			<div className='main-content-header--bottom'>
				<div className='main-content-header--bottom__breadcrumb-wrap'>
					<ul>
						<li>
							<Link to='./'>Home</Link>
						</li>
						<li>Dashboard</li>
					</ul>
				</div>
				<div className='main-content-header--bottom__setttings-wrap'>
					<div className='main-content-header--bottom__settings'>
						<Link to='./'>
							<img src={cogWheelIcon} className='menu-icon' alt='' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
