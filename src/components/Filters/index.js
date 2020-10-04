import React from 'react';
import Button from '../../customComponents/TextButton';
import styles from './styles.scss'




function Filters() {
    return (
        <div >
            <p> Filters </p>
            <Button value="Apply" variant="contained" color="primary" className="buttonBorder"/>
        </div>
    );
}

export default Filters;
