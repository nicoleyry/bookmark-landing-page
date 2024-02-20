import '../styles/faq.scss';
import Intro from './Intro';
import AccordionItem from './AccordionItem';
import { faqs } from '../data.js';

export default function FAQ() {
	return (
		<div className="faq">
			<Intro 
				title={"Frequently Asked Questions"}
				text={"Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."}
			/>

			<div className="accordion">
				{faqs.map((item, index) => (
					<AccordionItem key={index} question={item.question} answer={item.answer} />
				))}
			</div>
			<p className="btn">More Info</p>
		</div>
	)
}