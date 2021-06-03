import * as d3 from "d3";

export default function temporalForceDirectedGraph( container ){

	var
		width = container.offsetWidth ,
		height = container.offsetHeight ,
	
		simulation = d3.forceSimulation()
			.force("charge", d3.forceManyBody())
			.force("link", d3.forceLink().id(d => d.id))
			.force("x", d3.forceX())
			.force("y", d3.forceY())
			.force("center", d3.forceCenter(width / 2, height / 2))
			.on("tick", ticked),

		svg = d3.select( container )
			.append("svg")
			.attr("width", '100%')
			.attr("height", '100%'),

		link = svg.append("g")
			.attr("stroke", "#999")
			.attr("stroke-opacity", 0.6)
			.selectAll("line"),

		node = svg.append("g")
			.attr("stroke", "#fff")
			.attr("stroke-width", 1.5)
			.selectAll("circle"),

		data = {
			nodes: [
				{id: "1467"},
				{id: "1591"},
				{id: "1513"},
				{id: "1568"},
				{id: "1562"},
				{id: "1524"},
				{id: "1771"},
				{id: "1428"},
				{id: "1600"},
				{id: "1523"},
				{id: "1525"},
			],
			links: [
				{source: "1467", target: "1591"},
				{source: "1513", target: "1591"},
				{source: "1591", target: "1467"},
				{source: "1523", target: "1525"},
			]
		},
		nodes = data.nodes,
		links = data.links


	function ticked() {
		node.attr("cx", d => d.x)
			.attr("cy", d => d.y);

		link.attr("x1", d => d.source.x)
			.attr("y1", d => d.source.y)
			.attr("x2", d => d.target.x)
			.attr("y2", d => d.target.y);
	}
	function drag(simulation){
		function dragstarted(event, d) {
			if (!event.active){
				simulation.alphaTarget(0.3).restart();
			}
			d.fx = d.x;
			d.fy = d.y;
		}
		function dragged(event, d) {
			d.fx = event.x;
			d.fy = event.y;
		}
		function dragended(event, d) {
			if (!event.active){
				simulation.alphaTarget(0);
			}
			d.fx = null;
			d.fy = null;
		}
		return d3.drag()
			.on("start", dragstarted)
			.on("drag", dragged)
			.on("end", dragended);
	}
	function update({nodes, links}) {
		// const old = new Map(node.data().map(d => [d.id, d]));
		// nodes = nodes.map(d => Object.assign(old.get(d.id) || {}, d));
		// links = links.map(d => Object.assign({}, d));

		node = node
			.data(nodes, d => d.id)
			.join(enter => enter.append("circle")
			.attr("r", 5)
			.call(drag(simulation))
			.call(node => node.append("title").text(d => d.id)));

		link = link
			.data(links, d => [d.source, d.target])
			.join("line");

		simulation.nodes(nodes);
		simulation.force("link").links(links);
		simulation.alpha(1).restart().tick();
		ticked();
	}


	update({nodes, links});
}