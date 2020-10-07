import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonText from '../TextButton';
import styles from './styles.scss';

const useStyles = makeStyles({
	root: {
		width: 200,
	},
	media: {
		height: '100px',
		width: '100px',
		border: '1px solid',
		objectFit: 'cover',
	},
});

export default function MediaCard(props) {
	const [loading, setLoading] = useState(false);
	const classes = useStyles();

	const handleClick = () => {
		setLoading(true);
		setTimeout(() => {
			props.onClick();
			setLoading(false);
		}, 1000);
	};

	return (
		<Card className={classes.root}>
			<CardActionArea>
				{/* <CardMedia className={classes.media} image={props.image}  /> */}
				<img src={props.image} alt={props.image} className="image" />
				<CardContent>
					<Typography>{props.name}</Typography>
					<Typography>
						<i className="fas fa-rupee-sign"></i>
						<span className="actualPrice"> RS {props.actual}</span>
						<span className="displayPrice">{props.display} </span>
						<span className="discount"> {props.discount}% off </span>
					</Typography>
				</CardContent>
			</CardActionArea>

			<div onClick={handleClick} variant="outlined" className="addButton">
				{loading ? 'adding...' : 'add to cart'}
			</div>
		</Card>
	);
}
