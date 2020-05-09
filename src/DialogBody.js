import React from 'react'
import PropTypes from 'prop-types';

function getTime(date){
	let d = new Date(date);
	let current = new Date();
	//if it was today - then nothing to show
	let date_str = current.toLocaleDateString() != d.toLocaleDateString() ? d.toLocaleDateString() : '';
	return date_str + d.toLocaleTimeString().slice(0, 5)
}

function DialogBody({messages}){
	return (
		<div className = "dialog-body">
			{messages.map(m => {
				let cl = "bubble" + (m.from_id != 0 ? " left" : "");
				return <div className = {cl} title = {getTime(m.ts)} key = {m.ts}> {m.text} </div>
			})}
		</div>
	)
}DialogBody.propTypes = {
	messages : PropTypes.arrayOf(PropTypes.object)
}

export default DialogBody