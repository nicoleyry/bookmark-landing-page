import '../styles/nav.scss';
import logo from '../assets/images/logo-bookmark.svg';

export default function Nav() {
	return (
		<div className='nav'>
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="menu-container">
				<p className="menu">features</p>
				<p className="menu">pricing</p>
				<p className="menu">contact</p>
				<p className="menu login">login</p>
			</div>
		</div>
	);
}
