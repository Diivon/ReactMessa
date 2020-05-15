import React, {useState} from 'react'
import DialogHeader from './DialogHeader'
import DialogBody from './DialogBody'
import DialogInput from './DialogInput'


export default function Dialog(){
	let [messages, setMessages] = useState([
		 {from_id: 435, ts: 1588951786787, text: "Hello!"}
		,{from_id: 0, ts: 1588951786788, text: "Hi!"}
		,{from_id: 0, ts: 1588951786789, text: "How are you?)"}
		,{from_id: 435, ts: 1588951786790, text: "i'm fine, thanks"}
		,{from_id: 0, ts: 1588951786791, text: "Great!", replied : {from_id: 435, ts: 1588951786790, text: "i'm fine, thanks"}}
	]);
	let [selected, setSelected] = useState(0);
	let addMessage = (from_id, ts, text) => {
		//make new message to add
		var newMessage = {from_id: 0, ts, text}
		//if message replied - add to it
		if (selected) newMessage.replied = messages.filter(m => m.ts === selected)[0];
		//add to state
		setMessages(messages.concat([newMessage]));
		//reset replied message in UI
		setSelected(0);
	}
	let onUnReply = () => setSelected(0);
	return (
		<div className = "dialog-wrapper col-md-4 px-0">
      <DialogHeader buddyID = {435} />
      <DialogBody messages = {messages} onSelect = {setSelected} />
      <DialogInput placeholder = "Введите сообщение" 
      	buddyID = {435} 
      	onSend = {addMessage} 
      	repliedText = {selected ? messages.filter(e => e.ts === selected)[0].text : ''}
      	onUnReply = {onUnReply}
      />
    </div>
	)
}