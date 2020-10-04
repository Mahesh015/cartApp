import React, { useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { CollectionsBookmarkRounded } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from '../Cart';

function CartIcon() {
    const [isOpen, setIsOpen] = useState(false);
    const handleSearchClick =() =>{
        console.log('cart Clicked');
        setIsOpen(!isOpen);
    }

    let cart =(isOpen? <Cart /> : null);
    return (
        <div className="App">
            <ShoppingCartIcon  onClick={()=>{handleSearchClick()}}/>
            {/* {cart} */}
            
        </div>
    );
}

export default CartIcon;
