import React from 'react';
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
		height: "100px",
		width: '100px',
		border: '1px solid',
		objectFit: 'cover',
	},
});

export default function MediaCard(props) {
	const classes = useStyles();

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
			<CardActions>
				<ButtonText value="Add to Cart" onClick={props.onClick} variant="outlined" className="addButton" />
			</CardActions>
		</Card>
	);
}
