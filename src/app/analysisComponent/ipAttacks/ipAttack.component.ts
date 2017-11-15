import { Component, OnInit } from '@angular/core';
declare var d3: any;
declare var tip: any;


@Component({
    selector: 'analysis',
    templateUrl: `app/analysisComponent/ipAttacks/ipAttack.component.html`,
})

export class ipAttackComponent implements OnInit {


    ngOnInit() {
        var margin = { top: 70, right: 20, bottom: 20, left: 60 },
            width = 1100 - margin.left - margin.right,
            height = 600 - margin.top - margin.bottom;


        // set the ranges
        var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

        var y = d3.scale.linear().range([height, 0]);
        var border = 1;

        // define the axis
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .innerTickSize(-height)
            .outerTickSize(0)
            .tickPadding(10);

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10)
            .innerTickSize(-width)
            .outerTickSize(0)
            .tickPadding(10);

            
        var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function (d) {
                return "<strong>ID:</strong> <span style='color:Blue'>" + d._id + "</span>";
            });


        // add the SVG element
        var svg = d3.select("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")
            .attr("border", border);



        // load the data
        d3.json('http://localhost:9200/user/profile/_search ', function (error, data) {
            var arr = [];
            for (let item in data) {
                arr.push([item, data[item]]);
            }
            for (let i = 0; i <= arr.length; i++) {
                var news = arr[3];

                for (let i = 0; i <= news.length; i++) {
                    var scnd = news[1];
                }
            }
            console.log(scnd);
            //----------------------------------------------------------------------
            var arr2 = [];
            for (let item in scnd) {
                arr2.push([item, scnd[item]]);
            }

            for (let i = 0; i <= arr2.length; i++) {
                var hit = arr2[2];
                for (let i = 0; i <= hit.length; i++) {
                    var final_array = hit[1];
                }
            }
            for (let i = 0; i <= final_array.length; i++) {
                console.log(final_array[i]);
            }

            //----------------------------------------------------------------------
            final_array.forEach(function (d) {
                d._score = +d._score;
                d._id = d._id;
            }
            );


            // scale the range of the data
            x.domain(final_array.map(function (d) { return d._id; }));
            y.domain([0, d3.max(final_array, function (d) { return d._score; })]);

            // add axis
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis)
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", "-.55em")
                .attr("transform", "rotate(-90)");

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 5)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("score");



            // Add bar chart
            var bar = svg.selectAll("bar")
                .data(final_array)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function (d) { return x(d._id); })
                .attr("width", x.rangeBand())
                .attr("y", function (d) { return y(d._score); })
                .attr("height", function (d) {
                    return height - y(d._score)
                })
                .transition()
                .delay(function (d) { return 40000; })
                .duration(1000)
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide)



        });

    }
}