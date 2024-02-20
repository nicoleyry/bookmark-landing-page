import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import Features from './components/Features';
import Download from './components/Download';

function App() {
	return (
		<div className='App'>
			<div className="container">
				<Nav />
				<Main />
				<Features />
				<Download />
			</div>
		</div>
	);
}

export default App;
