import React from 'react'


function DialogInput({placeholder, buddyID}){
	return (
		<div className = "dialog-input-wrapper">
			<input type = "text" placeholder = {placeholder} />
			<div className = "send-message" />
		</div>
	)
}DialogInput.propTypes = {
	buddyID: PropTypes.number.isRequired,
	placeholder: PropTypes.string.isRequired
}