import React from 'react';
import * as examples from './examples'
import './d3_start.less'

export default class D3Start extends React.Component{
	componentDidMount(){
		// examples.circlePacking( this.container )

	}
	render(){
		return (
			<div id={'d3Start'}
				style={{
					width: '100%',
					height: '100%'
				}}>
				<div className={'d3-list'}>列表数据</div>
				<div ref={(dom)=>{
						this.container = dom
					}}></div>
			</div>
		)
	}
}