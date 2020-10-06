import React from 'react';
import Button from '../../customComponents/TextButton';

function Filters() {
	return (
		<div>
			<p> Filters </p>
			<Button value="Apply" variant="contained" color="primary" className="buttonBorder" />
		</div>
	);
}

export default Filters;
