import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import StarIcon from '@material-ui/icons/Star';
import Search from '../Search';
import CartIcon from '../CartIcon';
import { Link } from 'react-router-dom';
import './styles.scss';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Header() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<div className="headerIcons">
						<div>
							<Link to="/" className="homeIcon">
								<StarIcon />
							</Link>
						</div>

						<div className="menuIcons">
							<div className="searchIcon">
								<Search />
							</div>

							<Link to="/Cart" className="cartIcon">
								<CartIcon />
							</Link>
						</div>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
