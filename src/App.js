import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../src/components/Header';
import Cart from './components/Cart';
import axios from 'axios';
import Home from './components/Home';

function App() {
	// const [dataApi, setData] = useState[{}];
	useEffect(() => {
		axios
			.get('https://api.jsonbin.io/b/5f6b6cd665b18913fc51f71f')
			.then(response => {
				// const res = response.data.items;
			})
			.catch(error => {
				// console.log('error');
			});
	});
	return (
		<BrowserRouter>
			<div className="App">
				<Header />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/cart" component={Cart} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
