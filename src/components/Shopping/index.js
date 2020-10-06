import React from 'react';
import { connect } from 'react-redux';
import Card from '../../customComponents/Card';
import { addToCart } from '../actions/cartActions';
import './styles.scss';

const Shopping = props => {
	const handleClick = name => {
		props.addToCart(name);
	};
	let itemList = props.items.map((item, index) => {
		return (
			<div key={item.name} className="display">
				<Card
					name={item.name + index}
					image={item.image}
					discount={item.discount}
					actual={item.price.actual}
					display={item.price.display}
					onClick={() => {
						handleClick(item.name);
					}}
				/>
			</div>
		);
	});

	return <div className="itemsDisplay">{itemList}</div>;
};

const mapStateToProps = state => {
	return {
		items: state.shoppingItems,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		addToCart: name => {
			dispatch(addToCart(name));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shopping);
