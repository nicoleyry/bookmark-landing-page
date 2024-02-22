import '../styles/features.scss';
import { useState } from 'react';
import Intro from './Intro';
import { tabContent } from '../data.js';

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
				<img src={tabContent[activeTab].image} className='tab-img' alt={tabContent[activeTab].title} />
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