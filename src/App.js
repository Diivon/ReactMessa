import React from 'react';
import DialogHeader from './DialogHeader'
import DialogBody from './DialogBody'

function getDialog(){
  return {
    buddy_id: 435,
    messages: [
      ,{from_id: 435, ts: 1588951786787, text: "Hello!"}
      ,{from_id: 0, ts: 1588951786788, text: "Hi!"}
      ,{from_id: 0, ts: 1588951786789, text: "How are you?)"}
      ,{from_id: 435, ts: 1588951786790, text: "i'm fine, thanks"}
    ]
  }
}

function App() {
  return ([
    <div className = "content-wrapper">
      <h1>TODO</h1>
    </div>,
    <div className = "dialog-wrapper">
      <DialogHeader buddyID = {getDialog().buddy_id} />
      <DialogBody messages = {getDialog().messages} />
      <DialogInput placeholder = "Введите сообщение" buddyID = {getDialog().buddy_id} />
    </div>
  ]);
}

export default App;
