import { ADD_TO_CART, ADD_ITEM, REMOVE_ITEM, SUB_QUANTITY, SORT_ITEMS } from '../actions/actionTypes';
const initialState = {

    shopingItems: [
        {
            name: "Samsung Series 4",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 13999,
                display: 22500
            },
            discount: 37
        },
        {
            name: "Samsung Super 6",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 35999,
                display: 66900
            },
            discount: 46
        },
        {
            name: "Samsung The Frame",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 84999,
                display: 133900
            },
            discount: 36
        },
        {
            name: "Thomson B9 Pro",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 9999,
                display: 16999
            },
            discount: 41
        },
        {
            name: "LG Ultra HD",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 39990,
                display: 79990
            },
            discount: 50
        },
        {
            name: "Vu Ready LED TV",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 7999,
                display: 17e3
            },
            discount: 52
        },
        {
            name: "Koryo Android TV",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 55999,
                display: 199990
            },
            discount: 71
        },
        {
            name: "Micromax LED Smart",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 9999,
                display: 27990
            },
            discount: 64
        }
    ],

    addedItems: [],
    total: 0
}

const cartReducer = (state = initialState, action) => {
    if (action.type === ADD_TO_CART) {
        let addedItem = state.shopingItems.find(item => item.name === action.name);
        let existedItem = state.addedItems.find(item => action.name === item.name);

        if (existedItem) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    if (action.type === ADD_ITEM) {
        let addedItem = state.shopingItems.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.shopingItems.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if (action.type === SORT_ITEMS) {
        console.log('reducer', action.payload);
        let sortedItems = action.payload
        return Object.assign({}, {...state, shopingItems: sortedItems})
    }

    else {
        return state;
    }
}

export default cartReducer;