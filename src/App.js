import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import Features from './components/Features';

function App() {
	return (
		<div className='App'>
			<div className="container">
				<Nav />
				<Main />
				<Features />
			</div>
		</div>
	);
}

export default App;
