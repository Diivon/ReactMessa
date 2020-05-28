import React from 'react'
import Recorder from './Recorder'

export default function Glance(){
	return (
		<>
		<div className = "col-lg-11 bg-primary">
		Oppa
		</div>
		<div className = "col-lg-1 bg-danger">
			<Recorder />
		</div>
		</>
	)
}