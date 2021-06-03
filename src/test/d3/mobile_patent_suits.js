import * as d3 from "d3";


export default function mobilePatentSuits( container ){
	let
		data = {
			nodes:[
				{id: "Microsoft"},
				{id: "Amazon"},
				{id: "HTC"},
				{id: "Samsung"},
				{id: "Apple"},
				{id: "Motorola"},
				{id: "Nokia"},
				{id: "Kodak"},
				{id: "Barnes & Noble"},
				{id: "Foxconn"},
				{id: "Oracle"},
				{id: "Google"},
				{id: "Inventec"},
				{id: "LG"},
				{id: "RIM"},
				{id: "Sony"},
				{id: "Qualcomm"},
				{id: "Huawei"},
				{id: "ZTE"},
				{id: "Ericsson"}
			],
			links:[
				{source: "Microsoft", target: "Amazon", type: "licensing"},
				{source: "Microsoft", target: "HTC", type: "licensing"},
				{source: "Samsung", target: "Apple", type: "suit"},
				{source: "Motorola", target: "Apple", type: "suit"},
				{source: "Nokia", target: "Apple", type: "resolved"},
				{source: "HTC", target: "Apple", type: "suit"},
				{source: "Kodak", target: "Apple", type: "suit"},
				{source: "Microsoft", target: "Barnes & Noble", type: "suit"},
				{source: "Microsoft", target: "Foxconn", type: "suit"},
				{source: "Oracle", target: "Google", type: "suit"},
				{source: "Apple", target: "HTC", type: "suit"},
				{source: "Microsoft", target: "Inventec", type: "suit"},
				{source: "Samsung", target: "Kodak", type: "resolved"},
				{source: "LG", target: "Kodak", type: "resolved"},
				{source: "RIM", target: "Kodak", type: "suit"},
				{source: "Sony", target: "LG", type: "suit"},
				{source: "Kodak", target: "LG", type: "resolved"},
				{source: "Apple", target: "Nokia", type: "resolved"},
				{source: "Qualcomm", target: "Nokia", type: "resolved"},
				{source: "Apple", target: "Motorola", type: "suit"},
				{source: "Microsoft", target: "Motorola", type: "suit"},
				{source: "Motorola", target: "Microsoft", type: "suit"},
				{source: "Huawei", target: "ZTE", type: "suit"},
				{source: "Ericsson", target: "ZTE", type: "suit"},
				{source: "Kodak", target: "Samsung", type: "resolved"},
				{source: "Apple", target: "Samsung", type: "suit"},
				{source: "Kodak", target: "RIM", type: "suit"},
				{source: "Nokia", target: "Qualcomm", type: "suit"}
				// columns: ["source", "target", "type"]
			]
		},
		types = ["licensing", "suit", "resolved"],
		links = data.links.map(d => Object.create(d)),
		nodes = data.nodes.map(d => Object.create(d)),
		width = container.offsetWidth ,
		height = container.offsetHeight ,
		simulation = d3.forceSimulation(nodes)
			.force("link", d3.forceLink(links).id(d => d.id))
			.force("charge", d3.forceManyBody().strength(-400))
			.force("center", d3.forceCenter(width / 2, height / 2))
			.force("x", d3.forceX())
			.force("y", d3.forceY()),
		color = d3.scaleOrdinal(types, d3.schemeCategory10),
		svg = d3.select( container )
			.append("svg")
			.attr("width", '100%')
			.attr("height", '100%')

	svg.append("defs").selectAll("marker")
		.data(types)
		.join("marker")
		.attr("id", d => `arrow-${d}`)
		.attr("viewBox", "0 -5 10 10")
		.attr("refX", 15)
		.attr("refY", -0.5)
		.attr("markerWidth", 6)
		.attr("markerHeight", 6)
		.attr("orient", "auto")
		.append("path")
		.attr("fill", color)
		.attr("d", "M0,-5L10,0L0,5")

	let
		link = svg.append("g")
			.attr("fill", "none")
			.attr("stroke-width", 1.5)
			.selectAll("path")
			.data(links)
			.join("path")
			.attr("stroke", d => color(d.type))
			.attr("marker-end", d => `url(${new URL(`#arrow-${d.type}`, document.location)})`),

		node = svg.append("g")
			.attr("fill", "currentColor")
			.attr("stroke-linecap", "round")
			.attr("stroke-linejoin", "round")
			.selectAll("g")
			.data(nodes)
			.join("g")
			.call(drag(simulation))

	node.append("circle")
		.attr("stroke", "white")
		.attr("stroke-width", 1.5)
		.attr("r", 4);

	node.append("text")
		.attr("x", 8)
		.attr("y", "0.31em")
		.text(d => d.id)
		.clone(true).lower()
		.attr("fill", "none")
		.attr("stroke", "white")
		.attr("stroke-width", 3);

	simulation.on("tick", () => {
		link.attr("d", linkArc);
		node.attr("transform", d => `translate(${d.x},${d.y})`);
	});


	function linkArc(d) {
		const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
		return `
		M${d.source.x},${d.source.y}
		A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
		`;
	}
	function drag (simulation) {
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
	}