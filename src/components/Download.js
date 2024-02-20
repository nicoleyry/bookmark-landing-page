import '../styles/download.scss';
import Intro from './Intro';
import chromeImg from '../assets/images/logo-chrome.svg';
import firefoxImg from '../assets/images/logo-firefox.svg';
import operaImg from '../assets/images/logo-opera.svg';
import bgDots from '../assets/images/bg-dots.svg';

let extensionContent = [
	{
		name: 'Chrome',
		image: chromeImg,
		version: '62',
	},
	{
		name: 'Firefox',
		image: firefoxImg,
		version: '55',
	},
	{
		name: 'Opera',
		image: operaImg,
		version: '46',
	},
];

export default function Download() {
	return (
		<div className="download">
			<Intro 
				title={"Download the extension"}
				text={"We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize."}
			/>
			<div className="extension">
				{extensionContent.map((item) => (
					<div className="card-container"
						key={item.name}>
						<div className='card'>
							<img src={item.image} alt={item.name} />
							<p className='name'>Add to {item.name}</p>
							<p className='note'>Minimum version {item.version}</p>
							<img src={bgDots} alt="dots" />
							<p className="btn">Add & Install Extension</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}