import '../styles/main.scss';
import hero from '../assets/images/illustration-hero.svg';

export default function Main() {
	return (
		<div className="main">
			<div className="content">
				<p className='title'>A Simple Bookmark Manager</p>
				<p className='text'>
					A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.
				</p>
				<div className="btn">
					<p className="chrome">Get it on Chrome</p>
					<p className="firefox">Get it on Firefox</p>
				</div>
			</div>
			<div className="hero">
				<img src={hero} alt="hero"/>
			</div>
			
			<div className="bg-pattern"></div>
		</div>
	);
}