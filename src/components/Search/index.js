import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { CollectionsBookmarkRounded } from '@material-ui/icons';

function Search() {
    const handleSearchClick =() =>{
        console.log('cart Clicked');
    }
    return (
        <div className="App">
            <SearchIcon  onClick={()=>{handleSearchClick()}}/>
            
        </div>
    );
}

export default Search;
