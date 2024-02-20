import '../styles/features.scss';
import { useState } from 'react';
import tab1Image from '../assets/images/illustration-features-tab-1.svg';
import tab2Image from '../assets/images/illustration-features-tab-2.svg';
import tab3Image from '../assets/images/illustration-features-tab-3.svg';
import Intro from './Intro';

let tabContent = [
	{
		tab: 'Simple Bookmarking',
		image: tab1Image,
		title: 'Bookmark in one click',
		text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.',
	},
	{
		tab: 'Speedy Searching',
		image: tab2Image,
		title: 'Intelligent search',
		text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
	},
	{
		tab: 'Easy Sharing',
		image: tab3Image,
		title: 'Share your bookmarks',
		text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
	}
];

export default function Features() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className="features">
			<Intro 
				title={'Features'} 
				text={'Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.'} 
			/>
			<div className="tabs-container">
				{tabContent.map((item, index) => (
					<p className={`${index === activeTab && "active"} tab`}
						key={item.tab}
						onClick={() => setActiveTab(index)}>
						{item.tab}
					</p>
				))}
			</div>

			<div className="tab-content">
				<img src={tabContent[activeTab].image} alt={tabContent[activeTab].title} />
				<div className="tab-text">
					<p className="title">{tabContent[activeTab].title}</p>
					<p className="text">{tabContent[activeTab].text}</p>
					<p className="btn-more">More Info</p>
				</div>
			</div>

			<div className="bg-pattern"></div>
		</div>
	)
}