import '../styles/intro.scss';

export default function Intro(props) {
	return(
		<div className='intro'>
			<p className="title">{props.title}</p>
				<p className="text">
					{props.text}
				</p>
		</div>
	);
};