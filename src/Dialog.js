import React, {useState, useEffect} from 'react'
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
	let [replied_ts, setReplied] = useState(0);
	const addMessage = (from_id, ts, text) => {
		//make new message to add
		var newMessage = {from_id: 0, ts, text};
		//if message replied - add to it
		if (replied_ts) newMessage.replied = messages.filter(m => m.ts === replied_ts)[0];
		//add to state
		setMessages(messages.concat([newMessage]));
		//reset replied message in UI
		setReplied(0);
	}
	let [selected, setSelected] = useState([])
	const toggleSelected = (ts) => {
		if (typeof selected.find(a => a === ts) !== 'undefined')
			setSelected(selected.filter(a => a !== ts));
		else
			setSelected(selected.concat([ts]));
	}
	const deleteSelected = () => {
		setMessages(messages.filter(e => selected.includes(e.ts)));
		setSelected([]);
	}
	return (
		<div className = "dialog-wrapper col-md-4 px-0">
      <DialogHeader buddyID = {435} />
      <DialogBody messages = {messages} onReply = {setReplied} onChoose = {toggleSelected} />
      <DialogInput placeholder = "Введите сообщение" 
      	buddyID = {435} 
      	onSend = {addMessage} 
      	repliedText = {replied_ts ? messages.filter(e => e.ts === replied_ts)[0].text : ''}
      	onUnReply = {() => setReplied(0)}
      />
    </div>
	)
}