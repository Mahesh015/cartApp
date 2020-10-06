import { ADD_TO_CART, ADD_ITEM, REMOVE_ITEM, SUB_QUANTITY, SORT_ITEMS } from '../actionTypes';

export const addToCart = name => {
	return {
		type: ADD_TO_CART,
		name,
	};
};

export const addItem = name => {
	return {
		type: ADD_ITEM,
		name,
	};
};

export const removeItem = name => {
	return {
		type: REMOVE_ITEM,
		name,
	};
};
//subtract qt action
export const subtractQuantity = name => {
	return {
		type: SUB_QUANTITY,
		name,
	};
};

export const sortedItems = sortItems => {
	return {
		type: SORT_ITEMS,
		payload: sortItems,
	};
};
