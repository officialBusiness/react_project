import * as d3 from "d3";

export default function learnBarCharts( container ){
	let data = [ 50, 43, 120, 87, 99, 167, 142 ],
		width = container.offsetWidth ,
		height = container.offsetHeight ,

		svg = d3.select( container )
			.append( 'svg' )
			.attr("width", '100%')
			.attr("height", '100%'),
		// 定义上下左右的边距
		padding = {
			top: 20,
			right: 20,
			bottom: 20,
			left: 20
		},
		// 矩形所占的宽度（包括空白），单位为像素
		rectStep = 35,
		// 矩形所占的宽度（不包括空白），单位为像素
		rectWidth = 30;

	draw( data );
	function draw( data ){
		let 
			[ 
				// min,
				max
			] = d3.extent( data ),
			dx = width / 2 - data.length / 2 * rectStep,
			dy = height / 2,
			updateRect = svg.selectAll( 'rect' ).data( data ),
			enterRect = updateRect.enter(),
			exitRect = updateRect.exit();

		// 1.矩形的update部分的处理方法
		updateRect.attr( 'fill', 'steelblue' )
			.attr( 'x', (d, i)=>{
				return dx + padding.left + i * rectStep;
			} )
			.attr( 'y', ( d )=>{
				return dy - padding.bottom - d + max / 2;
			} )
			.attr( 'width', rectWidth )
			.attr( 'height', ( d )=>{
				return d;
			} );
		// 2.矩形的enter部分的处理方法
		enterRect.append( 'rect' )
			.attr( 'fill', 'steelblue' )
			.attr( 'x', (d, i)=>{
				return dx + padding.left + i * rectStep;
			} )
			.attr( 'y', ( d )=>{
				return dy - padding.bottom - d + max / 2;
			} )
			.attr( 'width', rectWidth )
			.attr( 'height', ( d )=>{
				return d;
			} );
		// 3.矩形的exit部分的处理方法
		exitRect.remove();

		let updateText = svg.selectAll( 'text' ).data( data ),
			enterText = updateText.enter(),
			exitText = updateText.exit();

		// 1.文字的update部分的处理方法
		updateText.attr( 'fill', 'white' )
			.attr( 'font-size', '14px' )
			.attr( 'text-anchor', 'middle' )
			.attr( 'x', ( d, i )=>{
				return dx + padding.left + i * rectStep;
			} )
			.attr( 'y', ( d )=>{
				return dy - padding.bottom - d + max / 2;
			} )
			.attr( 'dx', rectWidth / 2 )
			.attr( 'dy', '1em' )
			.text( (d)=>{
				return d;
			} );
		// 2.文字的enter部分的处理方法
		enterText.append( 'text' )
			.attr( 'fill', 'white' )
			.attr( 'font-size', '14px' )
			.attr( 'text-anchor', 'middle' )
			.attr( 'x', ( d, i )=>{
				return dx + padding.left + i * rectStep;
			} )
			.attr( 'y', ( d )=>{
				return dy - padding.bottom - d + max / 2;
			} )
			.attr( 'dx', rectWidth / 2 )
			.attr( 'dy', '1em' )
			.text( (d)=>{
				return d;
			} );
		// 3.文字的exit部分的处理方法
		exitText.remove();

		// let xAxixWidth = 300,
		// 	yAxisWidth = 300

		// alert( d3.scale )

		// let xScale = d3.scaleOrdinal()
		// 				.domain( d3.range( data.length ) )
		// 				.rangeRoundBands( [0, xAxixWidth], 0.2 ),

		// 	yScale = d3.scaleLinear()
		// 				.domain( [0, max] )
		// 				range( [0, yAxisWidth] )


	}

	// setTimeout( ()=>{
	// 	data.sort( d3.ascending );
	// 	draw( data );
	// }, 3000 )

	// setTimeout( ()=>{
	// 	data.push( 200, 250 );
	// 	draw( data );
	// }, 6000 )

}