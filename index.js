const width = 800
const height = 300
const margin = { top: 10, bottom: 10, left: 10, right: 10 }
const radius = 6;
const gap = 3;

const noOfDots = 100

let selectedCategory = "College"

let nestedData = d3
  .nest()
  .key(function (d) {
    return d.category
  })
  .sortKeys(d3.ascending)
  .entries(data)

const select = d3.select('#select-div')
.append('select')
.attr('id', 'category-select')

select
  .selectAll('option')
  .data(nestedData)
  .enter()
  .append('option')
  .attr('value', function (d) {
    return d.key
  })
  .text(function (d) {
    return d.key
  })

let positions = ["left", "right"]

select.on("change", function (d) {
      selectedCategory = d3.select(this).property("value");
      update()
  })

let colour = d3.scaleOrdinal()
  .range(["Coral", "MediumSeaGreen"])
  .domain(positions)

const svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)

const g = svg
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

let nodes = []

let xScale = d3.scalePoint()
    .range([0, width])
    .domain(positions)
    .padding(0.5)

for (var i = 0; i < noOfDots - 1; i++) {
  node = {};
  nestedData.forEach(function (d) {
    node[d.key] = i < d.values[0].percentage ? d.values[0].position : d.values[1].position
  })
  nodes.push(node)
}

var simulationCentre = d3
    .forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(5))
    .force('x', d3.forceX().x(width/2))
    .force('y', d3.forceY().y((height/2) + 10))
    .force('collision', d3.forceCollide().radius(radius + gap))
    .stop()

for (var i = 0; i < 120; i++) {
    simulationCentre.tick()
} 

nodes.forEach(function(d){
    d.centreX = d.x;
    d.centreY = d.y;
})


var simulationGroup = d3
  .forceSimulation(nodes)
  .force('charge', d3.forceManyBody().strength(5))
  .force('x', d3.forceX().x(function (d) {
      return xScale(d[selectedCategory])
    })
  )
  .force('y', d3.forceY().y((height/2) + 10))
  .force('collision', d3.forceCollide().radius(radius + gap))
  .stop()

runSimulation()

let nestByPosition = d3.nest()
    .key(function (d) {
        return d.position
    })
    .sortKeys(d3.ascending)
    .entries(data)


var labels = g.append("g")
    .attr("class", "labels")
    .selectAll("text")
    .data(nestByPosition)
    .enter()
    .append("g")
    .attr("transform", function(d) {
        return  "translate(" + xScale(d.key) + "," + 50 + ")";
    }) 


labels.append("text")
    .attr("class", "label label-subcategory")
    .attr("y", 18)
    .style("fill", function(d){
        return colour(d.key)
    })
    .text(function(d){
        let index = d.values.findIndex(findCategory)
        return d.values[index].subcategory
    })

labels.append("text")
    .attr("class", "label label-percentage")
    .style("font-weight", "bold")
    .style("fill", function(d){
        return colour(d.key)
    })
    .text(function(d){
        let index = d.values.findIndex(findCategory)
        return d.values[index].percentage
    })


var people = g.append("g")
    .attr("class", "people")
    .selectAll('g')
    .data(nodes)
    .enter()
    .append('g')
    .attr("class", "person")
    .attr("transform", function(d, i){
        return "translate(" + d.x + "," + d.y + ") scale(0.2)";
    })
    .style("opacity", function(d){
        return (Math.random() / 2) + 0.5
    })
    .style('fill', function (d) {
        return colour(d[selectedCategory]) })

people.append("path")
    .attr("d", function(d,i){
        return peopleIcons[(i % 2)].part1
    })

people.append("path")
    .attr("d", function(d,i){
        return peopleIcons[(i % 2)].part2
    })



function update() {

    labels.selectAll(".label-subcategory")
    .text(function(d){
        let index = d.values.findIndex(findCategory)
        return d.values[index].subcategory
    })

    labels.selectAll(".label-percentage")
    .text(function(d){
        let index = d.values.findIndex(findCategory)
        return d.values[index].percentage
    })

    simulationGroup.force('x', d3.forceX().x(function (d) {
        return xScale(d[selectedCategory])
        })
    )
    .alpha(1)

    runSimulation()

    let t0 = d3.transition()
        .duration(1000)

    let t1 = t0.transition()
        .duration(1000)

    //move all to centre
    
    t0.selectAll(".person")
        .attr("transform", function(d){
            console.log(d.centreX)
            return "translate(" + d.centreX + "," + d.centreY + ") scale(0.2)";
        })
        .style('fill', function (d) {
            return "#EEEEEE"; })

    t1.selectAll(".person")
        .attr("transform", function(d){
            return "translate(" + d.x + "," + d.y + ") scale(0.2)";
        })
        .style('fill', function (d) {
            return colour(d[selectedCategory]) })

}

function runSimulation() {
    for (var i = 0; i < 120; i++) {
        simulationGroup.tick()
    }
};

function findCategory(d) {
    return d.category == selectedCategory
};



