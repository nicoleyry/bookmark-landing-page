import '../styles/nav.scss';
import { useState } from 'react';
import { ReactComponent as Logo } from '../assets/images/logo-bookmark.svg';
import { ReactComponent as FBLogo } from '../assets/images/icon-facebook.svg';
import { ReactComponent as TwitterLogo } from '../assets/images/icon-twitter.svg';
import hamburgerIcon from '../assets/images/icon-hamburger.svg';
import closeIcon from '../assets/images/icon-close.svg';

export default function Nav() {
	const [closeMenu, setCloseMenu] = useState(true);

	let menuHandler = () => {
		setCloseMenu(!closeMenu);
	};

	return (
		<div className='nav'>
			<Logo className='logo' />
			<div className='menu-container'>
				<p className='menu'>features</p>
				<p className='menu'>pricing</p>
				<p className='menu'>contact</p>
				<p className='menu login'>login</p>
			</div>
			<img className={`hamburgerIcon ${closeMenu ? 'show' : ''}`} src={hamburgerIcon} onClick={menuHandler} alt='hamburger icon' />
			<div className={`mobile-nav ${closeMenu ? '' : 'show'}`}>
				<div className="mobile-nav-container">
					<div className="top">
						<div className="logo-container">
							<Logo className='logo' />
							<img className='closeIcon' src={closeIcon} onClick={menuHandler} alt='close icon' />
						</div>
						<div className="nav-menu-container">
							<div className="menu-box">
								<p className='menu'>features</p>
							</div>
							<div className="menu-box">
								<p className='menu'>pricing</p>
							</div>
							<div className="menu-box">
								<p className='menu'>contact</p>
							</div>
							<div className="menu-box">
								<p className='menu login'>login</p>
							</div>
						</div>
					</div>
					<div className="bottom">
						<FBLogo className='icon fb'/>
						<TwitterLogo className='icon twitter'/>
					</div>
				</div>
			</div>
		</div>
	);
}
