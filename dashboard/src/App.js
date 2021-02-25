// import logo from './logo.svg';
// import './App.css';
import Home from './Home';

import { Provider } from 'react-redux';
import { ConfirmProvider } from 'material-ui-confirm';
import { SnackbarProvider } from 'notistack';
import store from './store';

import Notifier from './components/Notifier';

function App() {
	// eslint-disable-next-line no-lone-blocks
	{
		/**
	Here we will be having the Login page if not authenticated
	Or the Home page if we are authenticated	
	*/
	}
	return (
		<Provider store={store}>
			<ConfirmProvider>
				<SnackbarProvider>
					<Notifier />
					<div className="App">
						{/* <header className="App-header">
					<h1>React Conf 2020 Dashboard</h1>
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header> */}
						<Home />
					</div>
				</SnackbarProvider>
			</ConfirmProvider>
		</Provider>
	);
}

export default App;
