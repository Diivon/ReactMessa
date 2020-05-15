import React from 'react';
import PropTypes from 'prop-types';

function getBuddyInfo(id){
	return {
		avatar_src: 'https://sun7-8.userapi.com/8ZeWmFH-BJpEe_D1PWowPo8-QoW6LCctpJw08Q/_qDd36pKBFE.jpg'
		,firstname: 'Свинка из злых птиц'
	}
}

function DialogHeader({buddyID}){
	let buddyInfo = getBuddyInfo(buddyID);
	return (
		<div className = "dialog-header w-100 pl-3 pr-3 align-middle">
			<Icon src = {buddyInfo.avatar_src} />
			<BuddyName name = {buddyInfo.firstname} />
			<BentoMenu />
		</div>
	)
}DialogHeader.propTypes = {
	buddyID: PropTypes.number.isRequired
}

function Icon({src}){
	return (
		<div className = "icon-wrapper">
			<img src = {src} title = "your buddy avatar" />
		</div>
	)
}Icon.propTypes = {
	src: PropTypes.string.isRequired//todo: add custom validator to ensure it's url for png
}

function BuddyName({name}) {
	return (
		<p className = "buddy-name mb-0">{name}</p>
	)
}BuddyName.propTypes = {
	name: PropTypes.string.isRequired
}
function BentoMenu(){
	return (
		<div className="bento-wrapper">
  		<div className="bento">
  		  <div className="box" />
  		  <div className="box" />
  		  <div className="box" />
  		  <div className="box" />
  		  <div className="box" />
  		  <div className="box" />
  		  <div className="box" />
  		  <div className="box" />
  		  <div className="box" />
  		</div>
		</div>
	)
}

export default DialogHeader