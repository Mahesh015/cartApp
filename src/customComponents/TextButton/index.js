import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function TextButtons(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <div className={classes.root}>
      
      <Button color={props.color} disabled={props.disabled}
        variant={props.variant} className={props.className} onClick={props.onClick}>
          {props.value}
      </Button>
    </div>
  );
}
