import React from 'react';
import * as examples from './textbus_examples.js';
import '@textbus/textbus/bundles/textbus.min.css';

export default class TextbusStart extends React.Component{
	componentDidMount(){
		// console.log('createEditor:', createEditor)
		examples.sample( this.container )
	}
	render(){
		return (
			<div
				ref={(dom)=>{
					this.container = dom
				}} 
				style={{
					width: '100%',
					height: '100%'
				}}>
			</div>
		)
	}
}