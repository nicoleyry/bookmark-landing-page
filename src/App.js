import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import Features from './components/Features';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<div className="container">
				<Nav />
				<Main />
				<Features />
				<Download />
				<FAQ />
			</div>
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
