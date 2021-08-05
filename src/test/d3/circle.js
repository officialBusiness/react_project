import * as d3 from "d3";

export default function circle( container ){

	var svg = d3.select( container )
		.append("svg")
		.attr("width", '100%')
		.attr("height", '100%');

	var circle = svg.selectAll("circle")
		.data([32, 57, 293]);

	console.log('circle:', circle)
	console.log('circle.enter():', circle.enter())

	circle.enter().append("circle")
		.attr("cy", 60)
		.attr("cx", function(d, i) { return i * 100 + 30; })
		.attr("r", function(d) { return Math.sqrt(d); })
		.attr("class", 't1 t2')
		.classed('t1', true)
		.classed('t2', true);
}