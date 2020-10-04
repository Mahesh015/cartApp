import React, { useState } from 'react';
import { connect } from 'react-redux';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function CartIcon(props) {
	const [isOpen, setIsOpen] = useState(false);
	const handleSearchClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div style={{ display: 'flex' }} className="App">
			<span style={{ fontSize: '20px', marginRight: '5px' }}>{props.items.length || 0}</span>
			<ShoppingCartIcon
				onClick={() => {
					handleSearchClick();
				}}
			/>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		items: state.addedItems,
	};
};

export default connect(mapStateToProps, null)(CartIcon);
