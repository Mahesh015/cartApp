import React from 'react';
import TextButton from '../../customComponents/TextButton';
import styles from './styles.scss';
import {connect} from 'react-redux';
import {sortedItems} from '../actions/cartActions';


function Sort(props) {
    const handleButtonClick =(sortBy, sortItems) =>{
        var sortedItems
        if (sortBy === 'Price-- High Low'){
            console.log("HL", sortItems);
            sortedItems=sortItems.sort((a,b) => b.price.actual - a.price.actual);
            // props.sortedItems(sortItems);
            // console.log('after Sort', sortItems);
        } else if(sortBy ==='Price -- Low High'){
            console.log('LH')
            sortedItems=sortItems.sort((a,b) => a.price.actual - b.price.actual);
        } else {
            sortedItems=sortItems.sort((a,b) => a.discount - b.discount);
            console.log('Discount');

        }
        props.sortedItems(sortedItems);
            console.log('after Sort', sortedItems);
    
        
    }
    const sortTypes =['Price-- High Low', 'Price -- Low High', 'Discount'];
    let sortButton = sortTypes.map (item => <TextButton value={item} onClick={() => { handleButtonClick(item, props.items) }}/>)
    return (
        <div className="Sort-flex-container">
            
            <p className="HeadText"> Sort By</p> 
            
            
            {/* <u className="TextUnderline"> <TextButton value="Price -- High Low" color="primary"/> </u>
            <TextButton value="Price -- Low High" />
            <TextButton value="Discount" />  */}

            {sortButton}
            
            
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return{
        sortedItems:(sortItems) =>{ dispatch(sortedItems(sortItems))}
    }
}

const mapStateToProps =(state) =>{
    return{
        items:state.shopingItems
    }
}
export default connect (mapStateToProps, mapDispatchToProps ) (Sort);

