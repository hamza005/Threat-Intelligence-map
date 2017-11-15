"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var targetedServiceComponent = (function () {
    function targetedServiceComponent() {
    }
    targetedServiceComponent.prototype.ngOnInit = function () {
        var margin = { top: 70, right: 90, bottom: 20, left: 60 }, width = 1000 - margin.left - margin.right, height = 600 - margin.top - margin.bottom;
        // Parse the date / time
        var parseDate = d3.time.format("%d-%b-%y").parse;
        // Set the ranges
        var x = d3.time.scale().range([0, width]);
        var y = d3.scale.linear().range([height, 0]);
        // Define the axes
        var xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(5).innerTickSize(-height)
            .outerTickSize(0)
            .tickPadding(10);
        var yAxis = d3.svg.axis().scale(y)
            .orient("left").ticks(10).innerTickSize(-width)
            .outerTickSize(0)
            .tickPadding(10);
        // Define the line
        var line = d3.svg.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.close); });
        // Adds the svg canvas
        var svg = d3.select("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        // Get the data
        d3.csv("data.csv", function (error, data) {
            data.forEach(function (d) {
                d.date = parseDate(d.date);
                d.close = +d.close;
            });
            // Scale the range of the data
            x.domain(d3.extent(data, function (d) { return d.date; }));
            y.domain([0, d3.max(data, function (d) { return d.close; })]);
            // define the area
            var area = d3.svg.area()
                .x(function (d) { return x(d.date); })
                .y0(height)
                .y1(function (d) { return y(d.close); });
            // add the area
            svg.append("path")
                .data([data])
                .attr("class", "area")
                .attr("d", area);
            // Add the scatterplot
            svg.selectAll("dot")
                .data(data)
                .enter().append("circle")
                .attr("r", 3.5)
                .attr("cx", function (d) { return x(d.date); })
                .attr("cy", function (d) { return y(d.close); });
            // Add the X Axis
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);
            // Add the Y Axis
            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);
            svg.append("path")
                .attr("class", "line")
                .attr("d", line(data));
        });
    };
    targetedServiceComponent = __decorate([
        core_1.Component({
            selector: 'analysis',
            templateUrl: "app/analysisComponent/targetedService/targetedService.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], targetedServiceComponent);
    return targetedServiceComponent;
}());
exports.targetedServiceComponent = targetedServiceComponent;
//# sourceMappingURL=targetedService.component.js.map