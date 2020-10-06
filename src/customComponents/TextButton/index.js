import React from 'react';
import Button from '@material-ui/core/Button';
import './styles.scss';

export default function TextButtons(props) {
	return (
		<div className={props.selected ? 'button-container' : ''}>
			<Button
				color={props.color}
				disabled={props.disabled}
				variant={props.variant}
				className={props.className}
				onClick={props.onClick}
			>
				{props.value}
			</Button>
		</div>
	);
}
