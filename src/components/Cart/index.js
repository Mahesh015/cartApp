import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveIcon from '@material-ui/icons/Remove';
import { addItem, removeItem, subtractQuantity } from '../actions/cartActions';
import './styles.scss';

function Cart(props) {
	const handleAddItem = name => {
		props.addItem(name);
	};

	const handleDeleteItem = name => {
		props.removeItem(name);
	};

	const handleSubtractQuantity = id => {
		props.subtractQuantity(id);
	};
	let addedItems = props.items.length ? (
		props.items.map(item => {
			return (
				<li className="" key={item.name}>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<img src={item.image} alt={item.img} className="image" />
						<div>
							<h3 className="title">{item.name}</h3>
							<p>{item.desc}</p>
							<p>
								<b>Price: {item.price.display}$</b>
							</p>
							<button
								className="waves-effect waves-light btn pink remove"
								onClick={() => {
									handleDeleteItem(item.name);
								}}
							>
								Remove
							</button>
						</div>
					</div>

					<div className="add-remove">
						<Link to="/cart">
							<i
								className="material-icons"
								onClick={() => {
									handleSubtractQuantity(item.name);
								}}
							>
								<RemoveIcon />
							</i>
						</Link>
						<span style={{ fontSize: '20px', padding: '20px' }}>{item.quantity}</span>
						<i className="fa fa-plus-circle" aria-hidden="true"></i>
						<Link to="/cart">
							<i
								className="material-icons"
								onClick={() => {
									handleAddItem(item.name);
								}}
							>
								<ControlPointIcon />
							</i>
						</Link>
					</div>
				</li>
			);
		})
	) : (
		<p>Nothing.</p>
	);

	return (
		<div className="container">
			<div className="cart">
				<h5>You have ordered:</h5>
				<ul className="collection">{addedItems}</ul>
			</div>
		</div>
	);
}
const mapStateToProps = state => {
	return {
		items: state.addedItems,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addItem: name => {
			dispatch(addItem(name));
		},
		removeItem: name => {
			dispatch(removeItem(name));
		},
		subtractQuantity: name => {
			dispatch(subtractQuantity(name));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
