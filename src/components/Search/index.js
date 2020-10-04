import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
    const handleSearchClick =() =>{
        // console.log('cart Clicked');
    }
    return (
        <div className="App">
            <SearchIcon  onClick={()=>{handleSearchClick()}}/>
            
        </div>
    );
}

export default Search;
