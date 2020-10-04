import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Filter from '../Filters';
import Sort from '../Sort';
import Shopping from '../Shopping';
// import Cart from './components/Cart';
import axios from 'axios';

function Home() {
	// const [dataApi, setData] = useState[{}];
	const handleButtonClick = () => {};
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
		<div className="App">
			<Grid container>
				<Grid item xs={3}>
					<Paper>
						{' '}
						<Filter />{' '}
					</Paper>
				</Grid>
				<Grid item xs={9}>
					<Paper>
						<Sort onClick={handleButtonClick} />
						<Shopping />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Home;
