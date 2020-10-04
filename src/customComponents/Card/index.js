import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles.scss';
import ButtonText from '../TextButton';

const useStyles = makeStyles({
  root: {
    width: 200,
    // maxWidth: 345,
    // display: 'flex',
    // flexDirection: 'row'
  },
  media: {
    height: 140,
    border: '1px solid',
    objectFit: "cover"
    //objectfit: 'cover'
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="C"
        />
        {/* <img src={props.image} /> */}
        <CardContent>
          <Typography >
            {props.name}
          </Typography>
          <Typography >
          <i class="fas fa-rupee-sign"></i>
            <span className="actualPrice"> RS {props.actual}</span>
            <span className="displayPrice">{props.display} </span>
            <span className="discount"> {props.discount}% off </span>
           {/* <Typography > */}
           
           
           </Typography>
            
           
            
          
        </CardContent>
        
      </CardActionArea>
      <CardActions >
        <ButtonText value="Add to Cart" onClick={props.onClick} variant="outlined" className="addButton"/>
        {/* <Button size="small" color="primary" onClick={props.onClick}>
          Add to Cart
        </Button> */}
        
      </CardActions>
    </Card>
  );
}
