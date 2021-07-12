import React from 'react';
import * as examples from './d3_examples.js'
import './d3_start.less'

export default class D3Start extends React.Component{
	componentDidMount(){
		examples.circle( this.container )
	}
	render(){
		return (
			<div id={'d3Start'}
				style={{
					width: '100%',
					height: '100%'
				}}
				ref={(dom)=>{
					this.container = dom
				}}>
			</div>
		)
	}
}