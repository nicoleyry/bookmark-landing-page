import { useState } from 'react';
import '../styles/accordion-item.scss';
import { ReactComponent as Arrow } from '../assets/images/icon-arrow.svg';


export default function AccordionItem({ question, answer }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="accordion-item" onClick={() => setIsActive(!isActive)}>
			<div className="question">
				<div className='title'>{question}</div>
				<Arrow className={`arrow ${isActive ? 'active' : null }`}/>
			</div>
			{isActive && <div className="answer">{answer}</div>}
		</div>
	)
}