import '../styles/faq.scss';
import Intro from './Intro';
import AccordionItem from './AccordionItem';

let faqs = [
	{
		question: 'What is Bookmark?',
		answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum recusandae nemo pariatur molestiae voluptas, voluptatum voluptate eius harum, repellat a consectetur dolore totam! Culpa inventore voluptates accusamus eius quia.',
	},
	{
		question: 'How can I request a new browser?',
		answer: 'Sed id sapien vulputate purus tristique gravida quis non tortor. Morbi metus urna, dignissim id ex at, bibendum ultrices augue. Sed scelerisque volutpat velit, ac eleifend dui sagittis non. Aliquam erat volutpat.',
	},
	{
		question: 'Is there a mobile app?',
		answer: 'Aenean quis urna id nisi gravida molestie semper non ipsum. Fusce a iaculis nulla. Donec dictum enim a tortor pulvinar tincidunt.',
	},
	{
		question: 'What about other Chromium browsers?',
		answer: 'Cras tempor laoreet enim non volutpat. Suspendisse pulvinar, enim dignissim ornare lobortis, metus orci porta arcu, a facilisis ex metus sed elit.',
	}
];

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