import React from 'react';

export default class D3Start extends React.Component{
	componentDidMount(){
		
	}
	render(){
		return (
			<div
				id={'knowledgeManagement'}
				ref={(dom)=>{
					this.container = dom
				}}
				style={{
					width: '100%',
					height: '100%'
				}}>
				<div>
				</div>
			</div>
		)
	}
}