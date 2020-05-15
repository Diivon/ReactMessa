import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';

function DialogInput({placeholder, buddyID, onSend, repliedText, onUnReply}){
	let a = (repliedText !== '');
	let [text, setText] = useState('');
	let classes = ['container-fluid', 'p-3', 'dialog-input-wrapper'];
	if (a) classes.push('replied') 
	return (
		<div className = {classes.join(' ')}> 
			{a ?	(<RepliedMessage text = {repliedText} onUnReply = {onUnReply}/>) : ''}
			<input type = "text" 
				placeholder = {placeholder} 
				className = "w-100 dialog-input" 
				value = {text}
				onFocus =  {e => e.target.placeholder = ''}
				onBlur =   {e => e.target.placeholder = placeholder}
				onChange = {e => setText(e.target.value)}
				onKeyUp =  {e => {
					if (e.key === 'Enter'){
						e.preventDefault();
						onSend(buddyID, new Date().getTime(), text);
						setText('');
					}	
				}}
			/>
		</div>
	)
}DialogInput.propTypes = {
	buddyID: PropTypes.number.isRequired,
	placeholder: PropTypes.string.isRequired
}

function RepliedMessage({text, onUnReply}){
	return(
		<blockquote 
			className = "replied-message px-3 w-100 blockquote"
			onDoubleClick = {onUnReply}>
			{text}
		</blockquote>
	)
}
export default DialogInput