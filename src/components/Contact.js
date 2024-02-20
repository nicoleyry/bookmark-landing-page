import { useState } from 'react';
import '../styles/contact.scss';
import errorImg from '../assets/images/icon-error.svg';

export default function Contact() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	function isValidEmail(email) {
	return /\S+@\S+\.\S+/.test(email);
	}

	let onChangeHandler = (event) => {
		if (!isValidEmail(event.target.value)) {
			setError(true);
		} else {
			setError(false);
		}
	
		setEmail(event.target.value);
	};

	let submitHandler = () => {
		setEmail('');
		setError(false);
	};

	return (
		<div className='contact'>
			<div className='content'>
				<p className='subtitle'>35,000+ already joined</p>
				<p className='title'>Stay up-to-date with what we're doing</p>
				<div className='contact-form'>
					<div className='input-block'>
						<input
							type='email'
							value={email}
							placeholder='Enter your email address'
							onChange={onChangeHandler}
							className={`${error ? 'error' : null}`}
						/>

						{error && <img className='error-img' src={errorImg} alt="Error!" />}
						{error && <div className="error-wrapper">
							<p className="error-msg">Whoops, make sure it's an email</p>
						</div>}
					</div>
					<p className="submit-btn" onClick={submitHandler}>Contact Us</p>
				</div>
			</div>
		</div>
	);
}
