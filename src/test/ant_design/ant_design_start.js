import React from 'react';
import * as Examples from './ant_design_examples'
import 'antd/dist/antd.css';
import './ant_design_start.less'

export default class AntDesignStart extends React.Component{
	componentDidMount(){
		// examples.circlePacking( this.container )
	}
	render(){
		return (
			<div id={'antDesignStart'}
				style={{
					width: '100%',
					height: '100%'
				}}>
				<Examples.Message />
			</div>
		)
	}
}