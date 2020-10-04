import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import StarIcon from '@material-ui/icons/Star';
import Search from '../Search';
import CartIcon from '../CartIcon';
import styles from './styles.scss'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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
            <AppBar position="static" >
                <Toolbar>

                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}


                    <div className="headerIcons">
                        <div>
                            <Link to="/" className="homeIcon"><StarIcon /></Link>
                        </div>

                        <div className="menuIcons">
                            <div className="searchIcon">
                                <Search />
                            </div>

                            <Link to="/Cart" className="cartIcon"><CartIcon /></Link>
                        </div>

                        {/* <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li> */}
                    </div>





                </Toolbar>

            </AppBar>
        </div>
    );
}
