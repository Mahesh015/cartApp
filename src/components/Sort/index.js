import React, { useState } from 'react';
import TextButton from '../../customComponents/TextButton';
import { connect } from 'react-redux';
import { sortedItems } from '../actions/cartActions';
import './styles.scss';

function Sort(props) {
	const [sortValue, setSortValue] = useState('Price - High Low');
	const handleButtonClick = (sortBy, sortItems) => {
		var sortedItems = [];
		if (sortBy === 'Price - High Low') {
			sortedItems = sortItems.sort((a, b) => b.price.actual - a.price.actual);
		} else if (sortBy === 'Price - Low High') {
			sortedItems = sortItems.sort((a, b) => a.price.actual - b.price.actual);
		} else {
			sortedItems = sortItems.sort((a, b) => a.discount - b.discount);
		}
		setSortValue(sortBy);
		props.sortedItems(sortedItems);
	};
	const sortTypes = ['Price - High Low', 'Price - Low High', 'Discount'];
	let sortButton = sortTypes.map((item, index) => (
		<TextButton
			selected={sortValue === item}
			key={index}
			value={item}
			onClick={() => {
				handleButtonClick(item, props.items);
			}}
		/>
	));
	return (
		<div className="Sort-flex-container">
			<p className="HeadText"> Sort By</p>
			{sortButton}
		</div>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		sortedItems: sortItems => {
			dispatch(sortedItems(sortItems));
		},
	};
};

const mapStateToProps = state => {
	return {
		items: state.shoppingItems,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
