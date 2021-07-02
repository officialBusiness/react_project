import React from 'react';
// import * as examples from './ant_design_examples'
import './ant_design_start.less'

export default class AntDesignStart extends React.Component{
	componentDidMount(){
		// examples.circlePacking( this.container )

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