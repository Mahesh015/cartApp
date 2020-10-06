import { ADD_TO_CART, ADD_ITEM, REMOVE_ITEM, SUB_QUANTITY, SORT_ITEMS } from '../actions/actionTypes';
const initialState = {
	shoppingItems: [
		{
			name: 'Samsung Series 4',
			image:
				'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
			price: {
				actual: 13999,
				display: 22500,
			},
			discount: 37,
		},
		{
			name: 'Samsung Super 6',
			image:
				'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
			price: {
				actual: 35999,
				display: 66900,
			},
			discount: 46,
		},
		{
			name: 'Samsung The Frame',
			image:
				'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
			price: {
				actual: 84999,
				display: 133900,
			},
			discount: 36,
		},
		{
			name: 'Thomson B9 Pro',
			image:
				'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
			price: {
				actual: 9999,
				display: 16999,
			},
			discount: 41,
		},
		{
			name: 'LG Ultra HD',
			image:
				'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
			price: {
				actual: 39990,
				display: 79990,
			},
			discount: 50,
		},
		{
			name: 'Vu Ready LED TV',
			image:
				'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
			price: {
				actual: 7999,
				display: 17e3,
			},
			discount: 52,
		},
		{
			name: 'Koryo Android TV',
			image:
				'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
			price: {
				actual: 55999,
				display: 199990,
			},
			discount: 71,
		},
		{
			name: 'Micromax LED Smart',
			image:
				'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
			price: {
				actual: 9999,
				display: 27990,
			},
			discount: 64,
		},
	],
	addedItems: [],
	total: 0,
	displayPrice:0,
	discount:0
};

const cartReducer = (state = initialState, action) => {
	if (action.type === ADD_TO_CART) {
		let addedItem = state.shoppingItems.find(item => item.name === action.name);
		let existedItem = state.addedItems.find(item => action.name === item.name);

		if (existedItem) {
			addedItem.quantity += 1;
			return {
				...state,
				total: state.total + addedItem.price.actual,
				displayPrice: state.displayPrice + addedItem.price.display
			};
		} else {
			addedItem.quantity = 1;
			let newTotal = state.total + addedItem.price.actual;
			let newDisplayPrice= state.displayPrice + addedItem.price.display
			return {
				...state,
				addedItems: [...state.addedItems, addedItem],
				total: newTotal,
				displayPrice:newDisplayPrice
			};
		}
	}
	if (action.type === ADD_ITEM) {
		let addedItem = state.shoppingItems.find(item => item.name === action.name);
		addedItem.quantity += 1;
		let newTotal = state.total + addedItem.price.actual;
		let newDisplayPrice= state.displayPrice + addedItem.price.display
		return {
			...state,
			total: newTotal,
			displayPrice: newDisplayPrice
		};
	}
	if (action.type === SUB_QUANTITY) {
		let addedItem = state.shoppingItems.find(item => item.name === action.name);
		if (addedItem.quantity === 1) {
			let new_items = state.addedItems.filter(item => item.name !== action.name);
			let newTotal = state.total - addedItem.price.actual;
			let newDisplayPrice= state.displayPrice - addedItem.price.display
			return {
				...state,
				addedItems: new_items,
				total: newTotal,
				displayPrice: newDisplayPrice
			};
		} else {
			addedItem.quantity -= 1;
			let newTotal = state.total - addedItem.price.actual;
			let newDisplayPrice= state.displayPrice - addedItem.price.display
			return {
				...state,
				total: newTotal,
				displayPrice: newDisplayPrice
			};
		}
	}
	if (action.type === REMOVE_ITEM) {
		let itemToRemove = state.addedItems.find(item => action.name === item.name);
		let new_items = state.addedItems.filter(item => action.name !== item.name);

		
		let newTotal = state.total - itemToRemove.price.actual * itemToRemove.quantity;
		let newDisplayPrice= state.displayPrice - itemToRemove.price.display * itemToRemove.quantity;
		return {
			...state,
			addedItems: new_items,
			total: newTotal,
			displayPrice: newDisplayPrice
		};
	}

	if (action.type === SORT_ITEMS) {
		const sortedItems = new Array(...action.payload);
		return {
			...state,
			shoppingItems: sortedItems,
		};
	} else {
		return state;
	}
};

export default cartReducer;
