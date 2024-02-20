import '../styles/footer.scss';
import { ReactComponent as Logo } from '../assets/images/logo-bookmark.svg';
import { ReactComponent as FBLogo } from '../assets/images/icon-facebook.svg';
import { ReactComponent as TwitterLogo } from '../assets/images/icon-twitter.svg';

export default function Footer() {
	return (
		<div className="footer">
			<div className="wrapper">
				<div className="menu-container">
					<Logo className='logo'/>
					<p className="menu">features</p>
					<p className="menu">pricing</p>
					<p className="menu">contact</p>
				</div>
				<div className="social-container">
					<FBLogo className='logo fb' />
					<TwitterLogo className='logo twitter'/>
				</div>
			</div>
		</div>
	)
}