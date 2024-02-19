import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
	return (
		<div className='App'>
			<div className="container">
				<Nav />
				<Main />
			</div>
		</div>
	);
}

export default App;
