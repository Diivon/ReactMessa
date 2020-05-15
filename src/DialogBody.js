import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import Bubble from './Bubble';

function DialogBody({messages, onSelect}){
	return (
		<div className = "dialog-body container-fluid p-3">
			{messages
				.slice(0)
				.reverse()
				.sort((a, b) => a.ts < b.ts ? 1 : -1)
				.map(m => (
					<Bubble 
						key = {m.ts}
						message = {m} 
						onSelect = {onSelect}
					/>))}
		</div>
	)
}DialogBody.propTypes = {
	messages : PropTypes.arrayOf(PropTypes.object)
}

export default DialogBody;