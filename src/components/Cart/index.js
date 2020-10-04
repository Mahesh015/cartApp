import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Card from '../../customComponents/Card';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveIcon from '@material-ui/icons/Remove';
import { addItem, removeItem, subtractQuantity } from '../actions/cartActions';
//import styles from './styles.sccs';
import styles from './styles.scss';

function Cart(props) {

    const handleAddItem = (name) => {
        console.log('add Items');
        props.addItem(name);
    }

    const handleDeleteItem = (name) => {
        props.removeItem(name);
    }

    const handleSubtractQuantity = (id) => {
        props.subtractQuantity(id);
    }
    console.log('cart', props.items);
    let addedItems = props.items.length ?
        (
            props.items.map(item => {
                { console.log('inside', item) };
                return (
                    <div className="itemCollection" key={item.name}>

                        {/* <div >
                            <Card name={item.name} image={item.image} discount={item.discount} actual={item.price.actual} display={item.price.display} />

                        </div> */}




                        <li className="" key={item.name}>
                            <span className="">
                                <img src={item.image} alt={item.img} className="image" />
                                <span className="title">{item.name}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price.display}$</b></p>
                                {/* <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p> */}
                                <span className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={() => { handleSubtractQuantity(item.name) }}><RemoveIcon /></i></Link>
                                    {item.quantity}
                                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                    <Link to="/cart"><i className="material-icons" onClick={() => { handleAddItem(item.name) }}><ControlPointIcon /></i></Link>
                                </span>
                                <button className="waves-effect waves-light btn pink remove" onClick={() => { handleDeleteItem(item.name) }}>Remove</button>
                            </span>

                            {/* <div >
                                
                               
                                
                                
                            </div> */}

                        </li>
                    </div>
                )
            })
        ) :

        (
            <p>Nothing.</p>
        )

    return (
        <div className="container">
            <div className="cart">
                <h5>You have ordered:</h5>
                <ul className="collection">
                    {addedItems}
                </ul>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (name) => { dispatch(addItem(name)) },
        removeItem: (name) => { dispatch(removeItem(name)) },
        subtractQuantity: (name) => { dispatch(subtractQuantity(name)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

