import React from 'react';
import PropTypes from 'prop-types';

function getBuddyInfo(id){
	return {
		avatar_src: 'https://sun1-91.userapi.com/4Sg0EOlxWuntWeXbHkm3Us-6k7jXb_j0lNtTbw/Qgg3IAAAyls.jpg'
		,firstname: 'Свинка из злых птиц'
	}
}

function DialogHeader({buddyID, isSelected}){
	let buddyInfo = getBuddyInfo(buddyID);
	return (
		<div className = "dialog-header w-100 pl-3 pr-3 align-middle">
			<Icon src = {buddyInfo.avatar_src} />
			<BuddyName name = {buddyInfo.firstname} />
			{isSelected.value ? <DeleteButton onClick = {isSelected.fun} /> : <BentoMenu />}
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

function DeleteButton({onClick}){
	return(
		<div onClick = {onClick} className = "delete-wrapper">
			<svg class="bi bi-bucket" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			  <path fill-rule="evenodd" d="M8 1.5A4.5 4.5 0 003.5 6h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 008 1.5z" clip-rule="evenodd"/>
			  <path fill-rule="evenodd" d="M1.61 5.687A.5.5 0 012 5.5h12a.5.5 0 01.488.608l-1.826 8.217a1.5 1.5 0 01-1.464 1.175H4.802a1.5 1.5 0 01-1.464-1.175L1.512 6.108a.5.5 0 01.098-.42zm1.013.813l1.691 7.608a.5.5 0 00.488.392h6.396a.5.5 0 00.488-.392l1.69-7.608H2.624z" clip-rule="evenodd"/>
			</svg>
		</div>
	)
}

export default DialogHeader