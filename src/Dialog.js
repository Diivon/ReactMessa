import React, {useState, useEffect} from 'react'
import DialogHeader from './DialogHeader'
import DialogBody from './DialogBody'
import DialogInput from './DialogInput'
import Loader from './Loader'


export default function Dialog(){
	let a = [
		 {from_id: 435, ts: 1588951786787, text: "Hello!"}
		,{from_id: 0, ts: 1588951786788, text: "Hi!"}
		,{from_id: 0, ts: 1588951786789, text: "How are you?)"}
		,{from_id: 435, ts: 1588951786790, text: "i'm fine, thanks"}
		,{from_id: 0, ts: 1588951786791, text: "Great!", replied : {from_id: 435, ts: 1588951786790, text: "i'm fine, thanks"}}
	]
	let answer_variants = ['Привет', 'Не думаю', 'Окей', 'Да, я тоже так думаю', 'Думаешь?', 'Хехехехехех)', 'Ой!', 'мне надо идти', ]

	let [messages, setMessages] = useState([]);
	let [loading, setLoading] = useState(true);
	useEffect(() => {
			setMessages(JSON.parse(localStorage.messages || '[]'))
			setTimeout(() => setLoading(false), 2000)
	},[]);

	useEffect(() => {
		if (!messages.length) return;
		let lastElement = messages[messages.length - 1];
		if (lastElement.from_id === 0){
			setTimeout(() => {
			addMessage(435, new Date().getTime(), answer_variants[Math.floor(Math.random() * answer_variants.length)])
			}, (Math.floor(Math.random() * 1500)));
		}
		localStorage.messages = JSON.stringify(messages);
	}, [messages])
	
	let [replied_ts, setReplied] = useState(0);
	const addMessage = (from_id, ts, text) => {
		//make new message to add
		var newMessage = {from_id, ts, text};
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
	//delete selected messages
	const deleteSelected = () => {
		setMessages(messages.filter(e => !selected.includes(e.ts)));
		setSelected([]);
	}
	return (
		<div className = "dialog-wrapper col-md-4 px-0">
      <DialogHeader buddyID = {435} isSelected = {{value: !!selected.length, fun : deleteSelected}} />
			{loading && <Loader />}
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