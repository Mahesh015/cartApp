import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveIcon from '@material-ui/icons/Remove';
import { addItem, removeItem, subtractQuantity } from '../actions/cartActions';
import Button from '../../customComponents/TextButton';
import './styles.scss';

function Cart(props) {
	const handleAddItem = name => {
		props.addItem(name);
	};

	const handleDeleteItem = name => {
		props.removeItem(name);
	};

	const handleSubtractQuantity = name => {
		props.subtractQuantity(name);
	};
	let addedItems = props.items.length ? (
		props.items.map((item, index) => {
			return (
				<div>
					<li key={item.name}>
						<div style={{ display: 'flex', alignItems: 'center', flexBasis: '60%' }}>
							<img src={item.image} alt={item.img} className="image" />
							<div>
								<h4 className="title">{item.name}</h4>

								<p>
									<b className="actualPrice">RS {item.price.actual}</b>
									<b className="displayPrice">{item.price.display}</b>
									<b className="discount"> {item.discount}% off</b>
								</p>
							</div>
						</div>

						<div className="add-remove">
							<Link to="/cart" className="removeIcon">
								<i
									onClick={() => {
										handleSubtractQuantity(item.name);
									}}
								>
									<RemoveIcon />
								</i>
							</Link>

							<span
								style={{
									fontSize: '20px',
									padding: '4px 10px',
									border: '1px solid black',
									margin: '10px',
								}}
							>
								{item.quantity}
							</span>
							<i className="fa fa-plus-circle" aria-hidden="true"></i>
							<Link to="/cart">
								<i
									onClick={() => {
										handleAddItem(item.name);
									}}
								>
									<ControlPointIcon />
								</i>
							</Link>
						</div>

						<div className="removeButton">
							<Button
								className="buttonFont"
								onClick={() => {
									handleDeleteItem(item.name);
								}}
								value="Remove"
							></Button>
						</div>
					</li>
				</div>
			);
		})
	) : (
		<p>Please Order</p>
	);
	let discount = props.displayPrice - props.total;
	let totalValue = props.items.length ? (
		<div className="details">
			<div className="cartDetails">
				<p className="priceDetails">PRICE DETAILS</p>
				<p style={{ display: 'flex', justifyContent: 'space-between' }}>
					{' '}
					<span>Price: </span> <span> {props.displayPrice}</span>
				</p>
				<p style={{ display: 'flex', justifyContent: 'space-between' }}>
					{' '}
					<span>Discount: </span> <span> {discount} </span>
				</p>
				<p> </p>
			</div>
			<p className="total"> Total Payable: {props.total}</p>
		</div>
	) : null;

	return (
		<div className="container">
			<div className="cart">
				<ul>{addedItems}</ul>
				{totalValue}
			</div>
		</div>
	);
}
const mapStateToProps = state => {
	return {
		items: state.addedItems,
		total: state.total,
		displayPrice: state.displayPrice,
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
