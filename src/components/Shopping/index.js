import React from 'react';
import {connect} from 'react-redux';
import Card from '../../customComponents/Card';
import styles from './styles.scss';
// import Button from '../../customComponents/TextButton';
import Button from "@material-ui/core/Button";
import {addToCart} from '../actions/cartActions';


function Shopping(props) {
    console.log('shopping', props.items);
    // console.log('actual',props.items[0].price.actual);
    const handleClick=(name)=>{
        props.addToCart(name);
        console.log(name);
    }
    let itemList = props.items.map(item=>{
        return(
            <div  key={item.name} className="display">
                    {/* <div className="card-image">
                        <img src={item.img} alt={item.title}/>
                        <span className="card-title">{item.title}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div> */}
                   
                    <Card name={item.name} image={item.image} discount={item.discount} actual={item.price.actual} display={item.price.display} onClick={()=>{handleClick(item.name)}}/>
                    {/* <Button value="ADD to Cart" /> */}
                    {/* <Button onClick={()=>{handleClick(item.name)}} > Cart Add</Button> */}
                 
                    
             </div>

        )
    })

    return (
        <div className="itemsDisplay" >
           
            
            {itemList}
        </div>
    );
}



const mapStateToProps =(state) =>{
    return{
        items:state.shopingItems
    }
}
const mapDispatchToProps= (dispatch) =>{
    return{
         addToCart:(name) =>{ dispatch(addToCart(name))}
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Shopping);
