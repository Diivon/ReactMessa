import React, {useState, useEffect} from 'react';

export default function Bubble({message, onSelect}){
	let m  = message; 

	let cl = ['bubble-wrapper', 'w-100'];
	if (m.from_id !== 0) cl.push('left')

	let replied_message = '';
	if (typeof m.replied !== 'undefined' && m.replied.text !== ''){
		let repl_cl = ['reply-message', 'p-1']; 
		if (m.replied.from_id !== m.from_id) 
			repl_cl.push('not-self');
		replied_message = (<div className = {repl_cl.join(' ')}>{m.replied.text}</div>);
	}

	return(
		<div className = {cl.join(' ')} 
			onDoubleClick = {() => onSelect(m.ts)}
		>
			{replied_message}
			<div 
				className = "bubble" 
				title = {getTime(m.ts)}> 
				{m.text} 
			</div>
		</div>
	)
}

function getTime(date){
	let d = new Date(date);
	let current = new Date();
	//if it was today - then nothing to show
	let date_str = current.toLocaleDateString() !== d.toLocaleDateString() ? d.toLocaleDateString() : '';
	return date_str + ' ' + d.toLocaleTimeString().slice(0, 5);
}