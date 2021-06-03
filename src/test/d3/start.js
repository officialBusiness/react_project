import React from 'react';
import * as examples from './examples'

export default class D3Start extends React.Component{
	componentDidMount(){

		examples.circle( this.container )

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