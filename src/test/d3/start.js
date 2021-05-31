import React from 'react';
import * as d3 from "d3";

export default class D3Start extends React.Component{
	componentDidMount(){
		// this.container 
		// console.log('this.container:', this.container)
		var svg = d3.select(this.container)//选择文档中的body元素
			.append("svg")          							//添加一个svg元素
			.attr("width", '100%')       					//设定宽度
			.attr("height", '100%');    					//设定高度

		var circle = svg.selectAll("circle")
			.data([32, 57, 293], function(d) { return d; });

		circle.enter().append("circle")
			.attr("cy", 60)
			.attr("cx", function(d, i) { return i * 100 + 30; })
			.attr("r", function(d) { return Math.sqrt(d); });

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